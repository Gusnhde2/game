import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 180,
    alignItems: "center",
    justifyContent: "flex-start",
  },

  inputContainer: {
    alignItems: "center",
    width: 350,
    elevation: 8,
  },

  textBox: {
    borderColor: "#222",
    backgroundColor: "#fffa",
    borderWidth: 1,
    marginBottom: 30,
    width: "70%",
    alignItems: "center",
    borderRadius: 20,
  },

  text: {
    fontSize: 25,
    padding: 10,
  },

  numberInputContainer: {
    width: "95%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f94144",
    gap: 10,
    height: 150,
  },

  numberText: {
    fontSize: 22,
    color: "#FFE35F",
  },

  numberContainer: {
    width: "20%",
    borderBottomWidth: 2,
    borderBottomColor: "#FFE35F",
    alignItems: "center",
  },

  number: {
    fontSize: 35,
    // fontWeight: 600,
    color: "#FFE35F",
  },

  btnsContainer: {
    height: 70,
    width: "95%",
    justifyContent: "space-around",
    flexDirection: "row",
    gap: 10,
  },
});
