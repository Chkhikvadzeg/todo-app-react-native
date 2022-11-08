import { StyleSheet, ImageBackground } from "react-native";

export default function BackgroundImage({ isBlack }) {
  return (
    <ImageBackground
      source={isBlack ? require('../assets/bg-mobile-dark.jpg') : require('../assets/bg-mobile-light.jpg')}
      resizeMode="cover"
      style={styles.bgImage}>
    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  bgImage: {
    width: "100%",
    height: 250,
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    zIndex: -1,
  },
});

