import NumberInput from "../components/number-input/NumberInput";
import NumberBtn from "../components/number-input/Button";
import { styles } from "../components/number-input/NumberInputStyle";
import { View } from "react-native";
import { useState } from "react";

const StartScreen = ({ onPress, reset, onChange, number }) => {
  return (
    <View style={styles.container}>
      <NumberInput onChange={onChange} number={number} />
      <View style={styles.btnsContainer}>
        <NumberBtn title='Reset' onPress={reset} />
        <NumberBtn title='Confirm' onPress={onPress} />
      </View>
    </View>
  );
};

export default StartScreen;
