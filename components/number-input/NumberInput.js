import { View, Text, TextInput } from "react-native";

import { styles } from "./NumberInputStyle";
import NumberBtn from "./Button";

const NumberInput = ({ number, onChange }) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.textBox}>
        <Text style={styles.text}>Guess my number</Text>
      </View>
      <View style={styles.numberInputContainer}>
        <Text style={styles.numberText}>Enter a Number</Text>
        <View style={styles.numberContainer}>
          <TextInput
            maxLength={2}
            value={number}
            keyboardType='number-pad'
            onChangeText={onChange}
            style={styles.number}></TextInput>
        </View>
      </View>
    </View>
  );
};

export default NumberInput;
