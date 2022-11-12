import { StyleSheet, View, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import ToDos from "./components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const [isBlack, setIsBlack] = useState(false);
  const [toDos, setToDos] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getToDos = async () => {
    try {
      const value = await AsyncStorage.getItem("toDos");
      if (value) {
        setToDos(JSON.parse(value));
        setFilteredToDos(JSON.parse(value));
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getToDos();
  }, []);

  const removeTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
    setFilteredToDos(filteredToDos.filter((todo) => todo.id !== id));
  }

  return (
    <View style={{ ...styles.container, backgroundColor: isBlack ? '#171823' : '#FFF' }}>
      <BackgroundImage isBlack={isBlack} />
      <Header
        isBlack={isBlack}
        setIsBlack={setIsBlack}
        setFilterType={setFilterType}
        filterType={filterType}
        toDos={toDos}
        setToDos={setToDos}
        setFilteredToDos={setFilteredToDos}
      />
      <ToDos
        toDos={toDos}
        setToDos={setToDos}
        isBlack={isBlack}
        filteredToDos={filteredToDos}
        setFilteredToDos={setFilteredToDos}
        removeTodo={removeTodo}
        filterType={filterType}
        setFilterType={setFilterType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    height: "100%",
  },
});

export default App;