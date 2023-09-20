import type { Task } from '@models/Task'

import { useState } from 'react'
import { View } from 'react-native'
import { Button, Input } from '@rneui/base'

import styles from "./style"
import { uuid } from '@utils'

interface TodoFormProps {
  setNewTask: (task: Task) => void
}

export default function TodoForm({ setNewTask }: TodoFormProps) {
  const [newTaskText, setNewTaskText] = useState("")
  
  const setTask = () => {
    const newTask = {
      id: uuid(),
      title: newTaskText,
      completed_at: null
    }

    setNewTask(newTask)
    setNewTaskText("")
  }

  return (
    <View style={styles.form}>
      <View style={styles.input}>
        <Input
          label="New Todo"
          leftIcon={{ type: 'font-awesome', name: 'tasks' }}
          onChangeText={(text) => {
            setNewTaskText(text)
          }}
          value={newTaskText}
        />
      </View>
      <Button title="Add" style={styles.addBtn} onPress={() => setTask()} />
    </View>
  )
}