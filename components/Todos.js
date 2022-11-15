import Todo from "./Todo"
import AddToDo from "./AddToDo"
import { StyleSheet, FlatList, View, Text, Pressable, TouchableWithoutFeedback } from "react-native"
import Filters from "./Filters"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ToDos({ toDos, setToDos, removeTodo, isBlack, filteredToDos, setFilteredToDos, filterType, setFilterType }) {
  const clearCompleted = () => {
    setToDos(toDos.filter((todo) => !todo.completed))
    setFilteredToDos(filteredToDos.filter((todo) => !todo.completed))
    AsyncStorage.setItem("toDos", JSON.stringify(toDos.filter((todo) => !todo.completed)))
  }
  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 0 }}>
      <View style={{ flex: 1 }}>
        <AddToDo filterType={filterType} filteredToDos={filteredToDos} setFilteredToDos={setFilteredToDos} setToDos={setToDos} toDos={toDos} isBlack={isBlack} />
        <FlatList
          data={filteredToDos}
          renderItem={({ item }) => <TouchableWithoutFeedback><Todo filterType={filterType} filteredToDos={filteredToDos} setFilteredToDos={setFilteredToDos} isBlack={isBlack} setToDos={setToDos} toDos={toDos} todo={item} removeTodo={removeTodo} /></TouchableWithoutFeedback>}
          keyExtractor={item => item.id}
          contentContainerStyle={{ ...styles.container, backgroundColor: isBlack ? '#25273D' : '#FFFFFF' }}
          ListFooterComponent={
            <>
              <View style={styles.footer}>
                <Text style={{ ...styles.text, color: isBlack ? '#5B5E7E' : '#9495A5' }}>
                  {toDos.filter(todo => !todo.completed).length} items left
                </Text>
                <Pressable
                  hitSlop={15}
                  onPress={clearCompleted}>
                  <Text style={{ ...styles.text, color: isBlack ? '#5B5E7E' : '#9495A5' }}>Clear Completed</Text>
                </Pressable>
              </View>
              <Filters filterType={filterType} setFilterType={setFilterType} toDos={toDos} setToDos={setToDos} filteredToDos={filteredToDos} setFilteredToDos={setFilteredToDos} isBlack={isBlack} />
            </>
          }
        />
        <View style={{ height: 20, marginTop: 10 }} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginBottom: 10,
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