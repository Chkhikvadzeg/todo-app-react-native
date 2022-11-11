import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function Filters({ isBlack, filterType, setFilterType, setFilteredToDos, filteredToDos, toDos, setToDos }) {
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
    paddingVertical: 16,
    borderRadius: 10,
  },
  text: {
    marginLeft: 18,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '700',
  }
})