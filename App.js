import { StyleSheet, View, StatusBar } from "react-native";
import { useState } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import ToDos from "./components/Todos";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);

  const removeTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
    setFilteredToDos(filteredToDos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#171823' : '#FAFAFA' }}>
      <BackgroundImage isBlack={isBlack} />
      <Header isBlack={isBlack} setIsBlack={setIsBlack} />
      <ToDos filterType={filterType} setFilterType={setFilterType} filteredToDos={filteredToDos} setFilteredToDos={setFilteredToDos} isBlack={isBlack} setToDos={setToDos} toDos={toDos} removeTodo={removeTodo} />
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