import { Pressable, Text, View } from "react-native";
import { styles } from "./ButtonStyle";

const NumberBtn = (props) => {
  return (
    <View style={styles.button}>
      <Pressable
        style={styles.pressable}
        android_ripple={styles.ripple}
        onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

export default NumberBtn;
