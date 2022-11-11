import { LinearGradient } from "expo-linear-gradient"
import { StyleSheet, Image } from "react-native"
import CheckboxIcon from "./CheckIcon"

export default function Checkbox({ todo, isBlack }) {

  return (
    <LinearGradient colors={todo.completed ? ['#55DDFF', '#C058F3'] : ['transparent', 'transparent']} star={{ x: 0.75, y: 0 }} style={{ ...styles.checkbox, borderColor: isBlack ? '#393A4B' : '#E3E4F1' }}>
      {todo.completed && <CheckboxIcon />}
    </LinearGradient>
  )
}


const styles = StyleSheet.create({
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
  },
  text: {
    color: "#fff",
  }
})

