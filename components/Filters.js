import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Filters({ isBlack, filterType, setFilterType, setFilteredToDos, toDos }) {
  const filters = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Active' },
    { id: 3, text: 'Completed' },
  ]
  const handleFilter = (text) => {
    setFilterType(text)
    if (text === 'All') {
      setFilteredToDos(toDos)
    } else if (text === 'Active') {
      setFilteredToDos(toDos.filter(todo => !todo.completed))
    } else if (text === 'Completed') {
      setFilteredToDos(toDos.filter(todo => todo.completed))
    }
  }
  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#25273D' : '#FFFFFF' }}>
      {filters.map(filter => {
        return (
          <Pressable
            key={filter.id}
            style={styles.pressable}
            onPress={() => handleFilter(filter.text)}
          >
            <Text style={{ ...styles.text, color: filterType === filter.text ? '#3A7CFD' : isBlack ? '#5B5E7E' : '#9495A5' }}>{filter.text}</Text>
          </Pressable>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginHorizontal: 20,
    borderRadius: 10,
    height: 45,
  },
  text: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
  },
  pressable: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    width: '25%',
  }
})