import { StyleSheet } from "react-native";

const InputStyle = StyleSheet.create({
  container: {
    width: "80%",
    height: "25%",
  },

  input: {
    width: "100%",
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5,
    color: "#f2f2f2",
    height: "100%",
    fontSize: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
  },  
  inputFocus: {
    width: "100%",
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5,
    color: "#FFBF8F",
    height: "100%",
    fontSize: 15,
    paddingHorizontal: 25,
    paddingVertical: 15,
    //transform: [{scale: 1.05}]
  },
})

export default InputStyle;