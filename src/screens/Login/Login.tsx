
import { useEffect } from 'react'
import { Button } from 'react-native'
import * as Google from 'expo-auth-session/providers/google'

import styles from "./style"
import { PublicLayout as Layout } from "../../shared/layouts"


export default function Login() {
  const [_, response, promptAsync] = Google.useAuthRequest({
    androidClientId: '',
    iosClientId: '',
    expoClientId: '',
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { accessToken } = response.authentication || {}
      getUserData({ accessToken }).then((user) => {
        setUserInfo(user)
      })
    }
  }, [response])

  const getUserData = async ({ accessToken }: { accessToken?: string }) => {
    if (!accessToken) return

    const userInfo = await fetch('https://www.googleapis.com/userinfo/v2/me', {
      headers: { Authorization: `Bearer ${accessToken}` },
    })

    return await userInfo.json()
  }

  const setUserInfo = ({ authentication }) => {
    // authentication?.accessToken
  }


  return (
    <Layout style={styles.container}>
      <Button
        title={'Login'}
        onPress={() => {
          promptAsync({ showInRecents: true })
        }}
      />
    </Layout>
  )
}