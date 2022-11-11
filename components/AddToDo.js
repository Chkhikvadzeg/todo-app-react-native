import { View, StyleSheet, Image, TextInput, Pressable } from 'react-native'
import React, { useState, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function AddToDo({ toDos, setToDos, isBlack, filteredToDos, setFilteredToDos, filterType }) {
  const [completed, setCompleted] = useState(false)
  const [text, setText] = useState('')
  const inputRef = useRef()
  const changeHandler = (val) => {
    setText(val)
  }
  const addListener = (e) => {
    setToDos(
      [...toDos,
      { id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 0, text: e.nativeEvent.text, completed }
      ]
    )
    const newFilteredToDos = () => {
      if (completed) {
        if (filterType === 'Completed' || filterType === 'All') {
          return [...filteredToDos, { id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 0, text: e.nativeEvent.text, completed }]
        } else {
          return filteredToDos
        }
      } else {
        if (filterType === 'Active' || filterType === 'All') {
          return [...filteredToDos, { id: toDos.length > 0 ? toDos[toDos.length - 1].id + 1 : 0, text: e.nativeEvent.text, completed }]
        } else {
          return filteredToDos
        }
      }
    }
    setFilteredToDos(newFilteredToDos());
    setText('')
    inputRef.current.blur()
  }
  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#25273D' : '#FFFFFF' }}>
      <Pressable hitSlop={10} onPress={() => setCompleted(prev => !prev)} >
        <LinearGradient colors={completed ? ['#55DDFF', '#C058F3'] : ['transparent', 'transparent']} star={{ x: 0.75, y: 0 }} style={{ ...styles.checkbox, borderColor: isBlack ? '#393A4B' : '#E3E4F1' }}>
          {completed && <Image source={require('../assets/icon-check.png')} />}
        </LinearGradient>
      </Pressable>
      <TextInput
        style={{ ...styles.textInput, color: isBlack ? '#C8CBE7' : '#393A4B' }}
        placeholder="Add a new todo"
        placeholderTextColor={isBlack ? '#5B5E7E' : '#9495A5'}
        onSubmitEditing={addListener}
        value={text}
        onChangeText={changeHandler}
        ref={inputRef}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginTop: 40,
    marginBottom: 24,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    borderWidth: 1,
  },
  textInput: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    width: "100%",
  }
})