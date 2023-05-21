import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { styles } from "./appStyles";
import NumberInput from "./components/number-input/NumberInput";
import StartScreen from "./screens/StartScreen";
import GameScreen from "./screens/GameScreen";
import { useState } from "react";

export default function App() {
  const [confirm, setConfirm] = useState(false);
  const [number, setNumber] = useState();

  console.log(number);

  const confirmNumberHandler = (startNumber) => {
    if (startNumber > 0) {
      setNumber(startNumber);
      setConfirm(true);
    }
  };

  return (
    <View style={styles.container}>
      {!confirm && <StartScreen startNumber={confirmNumberHandler} />}
      {confirm && (
        <GameScreen
          number={number}
          onPress={() => {
            setConfirm(false);
          }}
        />
      )}
      <StatusBar style='auto' />
    </View>
  );
}
