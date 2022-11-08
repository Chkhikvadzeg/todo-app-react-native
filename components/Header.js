import { View, Image, TouchableOpacity, StyleSheet } from 'react-native'

export default function Header({ isBlack, setIsBlack }) {
  return (
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} />
      <TouchableOpacity onPress={() => setIsBlack(!isBlack)}>
        <Image source={isBlack ? require('../assets/sun.png') : require('../assets/moon.png')} />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 24,
  }
});
