import NumberInput from "../components/number-input/NumberInput";
import NumberBtn from "../components/number-input/Button";
import { styles } from "../components/number-input/NumberInputStyle";
import { View } from "react-native";
import { useState } from "react";

const StartScreen = (props) => {
  const [number, setNumber] = useState("");

  const setNumberHandler = (enteredText) => {
    setNumber(enteredText);
  };

  const numberHandler = () => {
    props.startNumber(number);
  };

  return (
    <View style={styles.container}>
      <NumberInput onChange={setNumberHandler} number={number} />
      <View style={styles.btnsContainer}>
        <NumberBtn
          title='Reset'
          onPress={() => {
            setNumber("");
          }}
        />
        <NumberBtn title='Confirm' onPress={numberHandler} />
      </View>
    </View>
  );
};

export default StartScreen;
