import { Button, ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import Header from "./components/Header";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={isBlack ? require('./assets/bg-mobile-dark.jpg') : require('./assets/bg-mobile-light.jpg')}
        resizeMode="cover"
        style={styles.bgImage}>
      </ImageBackground>
      <Header isBlack={isBlack} setIsBlack={setIsBlack} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: 250,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingHorizontal: 24,
  }

});

export default App;