import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Checkbox from "./Checkbox"
import IconX from "./IconX";

export default function Todo({ todo, removeTodo, toDos, setToDos, isBlack, setFilteredToDos, filterType }) {
  const handlePress = () => {
    const newToDos = toDos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item
    });
    setToDos(newToDos)
    AsyncStorage.setItem('toDos', JSON.stringify(newToDos));

    if (filterType === "Active") {
      setFilteredToDos(newToDos.filter((todo) => !todo.completed))
    } else if (filterType === "Completed") {
      setFilteredToDos(newToDos.filter((todo) => todo.completed))
    } else {
      setFilteredToDos(newToDos)
    }
  }

  return (
    <View style={{ ...styles.container, borderBottomColor: isBlack ? '#393A4B' : '#E3E4F1' }}>
      <TouchableOpacity style={styles.flex} onPress={handlePress}>
        <Checkbox isBlack={isBlack} todo={todo} />
        <Text
          style={{
            ...styles.text,
            textDecorationLine: todo.completed ? 'line-through' : 'none',
            color: todo.completed && !isBlack ? '#D1D2DA' : !todo.completed && !isBlack ? '#494C6B' : todo.completed && isBlack ? '#4D5067' : '#C8CBE7'
          }}>{todo.text}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeIcon} onPress={() => removeTodo(todo.id)}>
        <IconX />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeIcon: {
    paddingRight: 20,
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
    maxWidth: 280,
  }
})
