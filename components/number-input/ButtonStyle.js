import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    alignSelf: "stretch",
    backgroundColor: "#7a1a4a",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    flex: 2,
    elevation: 8,
  },

  pressable: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "#fff",
    padding: 8,
    width: "100%",
    textAlign: "center",
  },
  ripple: {
    color: "#FFE35F",
    borderless: true,
  },
});
