import { View, Image, StyleSheet, Pressable } from 'react-native'
import MoonIcon from './Moon';
import SunIcon from './Sun';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header({ isBlack, setIsBlack }) {


  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Pressable hitSlop={30} style={({ pressed }) => ({ opacity: pressed ? 0.2 : 1 })} onPress={() => setIsBlack(prev => !prev)}>
        {isBlack ? <SunIcon /> : <MoonIcon />}
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  logo: {
    width: 109,
    aspectRatio: 108 / 20
  }
});
