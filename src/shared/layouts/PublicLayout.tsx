import type { StyleProp, ViewStyle } from 'react-native'

import { StyleSheet, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

type LayoutType = {
  children: React.ReactNode
  style?: StyleProp<ViewStyle>
}

export default function PublicLayout({ children, style }: LayoutType) {
  const styl = StyleSheet.flatten([styles.container, style])
  
  return (
    <View style={styl}>
      <StatusBar style="auto" />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
})