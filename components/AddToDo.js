import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native'
import React, { useState, useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient'

export default function AddToDo({ toDos, setToDos, isBlack }) {
  const [completed, setCompleted] = useState(false)
  const [text, setText] = useState('')
  const inputRef = useRef()
  const changeHandler = (val) => {
    setText(val)
  }
  const addListener = (e) => {
    setToDos([...toDos, { id: toDos.length + 1, text: e.nativeEvent.text, completed }])
    setText('')
    inputRef.current.blur()
  }
  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#25273D' : '#FFFFFF' }}>
      <TouchableOpacity onPress={() => setCompleted(prev => !prev)} >
        <LinearGradient colors={completed ? ['#55DDFF', '#C058F3'] : ['transparent', 'transparent']} star={{ x: 0.75, y: 0 }} style={{ ...styles.checkbox, borderColor: isBlack ? '#393A4B' : '#E3E4F1' }}>
          {completed && <Image source={require('../assets/icon-check.png')} />}
        </LinearGradient>
      </TouchableOpacity>
      <TextInput
        style={{ ...styles.textInput, color: isBlack ? '#FFFFFF' : '#000000' }}
        placeholder="Add a new todo" placeholderTextColor={isBlack ? '#5B5E7E' : '#9495A5'}
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
})