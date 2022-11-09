import { TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Checkbox from "./Checkbox"

export default function Todo({ todo, removeTodo, toDos, setToDos, isBlack }) {
  const handlePress = () => {
    const newToDos = toDos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        }
      }
      return item
    });
    setToDos(newToDos)
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
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingLeft: 20,
    borderBottomWidth: 1,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  removeIcon: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    lineHeight: 12,
  }
})
