import type { State } from '@hookstate/core'
import type { Task } from '@models/Task'

import { View } from 'react-native'
import { Button, CheckBox, Text } from '@rneui/base'
import { none } from '@hookstate/core'

import styles from "./style"

interface TodoItemProps {
  task: State<Task, {}>
}

export default function TodoItem({ task }: TodoItemProps) {
  const { title, completed_at } = task.get()

  return (
    <View style={styles.item}>
      <CheckBox
        checked={completed_at !== null}
        onPress={() => {
          const completedAt = completed_at === null
            ? new Date().toISOString()
            : null

          task.completed_at.set(completedAt)
        }}
      />
      <Text h3 style={styles.title}>
        {title}
      </Text>
      <Button
        title="Delete"
        style={styles.deleteBtn}
        color="error"
        onPress={() => {
          task.set(none)
        }}
      />
    </View>
  )
}