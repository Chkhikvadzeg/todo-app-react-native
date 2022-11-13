import { StyleSheet, View, StatusBar, Appearance } from "react-native";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import BackgroundImage from "./components/BackgroundImage";
import ToDos from "./components/Todos";
import AsyncStorage from "@react-native-async-storage/async-storage";

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isBlack, setIsBlack] = useState(colorScheme === 'dark');
  const [toDos, setToDos] = useState([]);
  const [filterType, setFilterType] = useState("All");
  const [filteredToDos, setFilteredToDos] = useState([]);

  const getToDos = async () => {
    try {
      const value = await AsyncStorage.getItem("toDos");
      if (value) {
        setToDos(JSON.parse(value));
        setFilteredToDos(JSON.parse(value));
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getTheme = async () => {
    AsyncStorage.getItem('isBlack').then((value) => {
      if (value) {
        setIsBlack(JSON.parse(value));
      }
    })
  }

  useEffect(() => {
    getToDos();
    getTheme();
  }, []);

  const removeTodo = (id) => {
    setToDos(toDos.filter((todo) => todo.id !== id));
    setFilteredToDos(filteredToDos.filter((todo) => todo.id !== id));
    AsyncStorage.setItem("toDos", JSON.stringify(toDos.filter((todo) => todo.id !== id)));
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