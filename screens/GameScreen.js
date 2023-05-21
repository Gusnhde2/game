import { View, Text, Button } from "react-native";

const GameScreen = (props) => {
  console.log(props.number);
  return (
    <View>
      <Text>Game screen</Text>
      <Text>{props.number}</Text>
      <Button title='Back' onPress={props.onPress} />
    </View>
  );
};

export default GameScreen;
