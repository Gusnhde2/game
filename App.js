import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, ImageBackground, View } from "react-native";
import { styles } from "./appStyles";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const [confirm, setConfirm] = useState(false);
  const [number, setNumber] = useState("");

  console.log(number);
  const setNumberHandler = (enteredText) => {
    setNumber(enteredText);
  };

  const resetInputHandler = () => {
    setNumber("");
  };

  const confirmNumberHandler = () => {
    const chosenNumber = parseInt(number);
    if (isNaN(chosenNumber) || chosenNumber > 99 || chosenNumber <= 0) {
      Alert.alert("Invalid number", "Number has to be between 1 and 99.", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
    } else {
      setConfirm(true);
    }
  };

  return (
    <LinearGradient colors={styles.gradientColors} style={styles.container}>
      <ImageBackground
        source={require("./assets/numbers.png")}
        resizeMode='cover'
        imageStyle={styles.imageStyle}>
        {!confirm && (
          <StartScreen
            onPress={confirmNumberHandler}
            onChange={setNumberHandler}
            reset={resetInputHandler}
            number={number}
          />
        )}
        {confirm && <GameScreen number={number} onPress={resetInputHandler} />}
        <StatusBar style='auto' />
      </ImageBackground>
    </LinearGradient>
  );
}
