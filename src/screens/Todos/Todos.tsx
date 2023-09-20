import type { State } from '@hookstate/core'
import type { Task } from '@models/Task'

import { SafeAreaView, FlatList } from "react-native"
import { ListItem } from '@rneui/base'
import { useHookstate } from '@hookstate/core'

import styles from "./style"
import initialState from "./data.json"
import { TodoForm, TodoItem } from "@components"

export default function Todos() {
  const state: State<Task[]> = useHookstate(initialState as Task[]);

  return (
    <SafeAreaView style={styles.container}>
      <TodoForm setNewTask={(task: Task) => state.merge([task])} />
      <FlatList
        scrollEnabled={true}
        data={state}
        keyExtractor={({ id }) => id.get()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <TodoItem task={item} />
            </ListItem.Content>
          </ListItem>
        )}
      />
    </SafeAreaView>
  )
}