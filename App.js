import { StyleSheet, View, FlatList, Text, StatusBar, SafeAreaView } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import ToDos from "./components/Todos";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [toDos, setToDos] = useState([
    { id: 1, text: "Learn React Native" },
    { id: 2, text: "Learn React Native" },
  ]);

  const removeTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#171823' : '#FAFAFA' }}>
      <BackgroundImage isBlack={isBlack} />
      <Header isBlack={isBlack} setIsBlack={setIsBlack} />
      <ToDos isBlack={isBlack} setToDos={setToDos} toDos={toDos} removeTodo={removeTodo} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  }
});

export default App;