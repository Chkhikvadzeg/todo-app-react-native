import Todo from "./Todo"
import AddToDo from "./AddToDo"
import { StyleSheet, SafeAreaView, FlatList, View, Text, TouchableOpacity } from "react-native"

export default function ToDos({ toDos, setToDos, removeTodo, isBlack }) {
  return (
    <SafeAreaView>
      <View>
        <AddToDo setToDos={setToDos} toDos={toDos} isBlack={isBlack} />
        <View style={{ ...styles.container, backgroundColor: isBlack ? '#25273D' : '#FFFFFF' }}>
          <FlatList
            data={toDos}
            renderItem={({ item }) => <Todo isBlack={isBlack} setToDos={setToDos} toDos={toDos} todo={item} removeTodo={removeTodo} />}
            keyExtractor={item => item.id}
          />
          <View style={styles.footer}>
            <Text style={{ ...styles.text, color: isBlack ? '#5B5E7E' : '#9495A5' }}>
              {toDos.filter(todo => !todo.completed).length} items left
            </Text>
            <TouchableOpacity
              onPress={() => setToDos(toDos.filter(todo => !todo.completed))}>
              <Text style={{ ...styles.text, color: isBlack ? '#5B5E7E' : '#9495A5' }}>Clear All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 22,
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
  }
})