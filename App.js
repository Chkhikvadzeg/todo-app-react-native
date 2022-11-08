import { ImageBackground, StyleSheet, View, } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  return (
    <View style={styles.container}>
      <BackgroundImage isBlack={isBlack} />
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