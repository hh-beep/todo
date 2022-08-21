import React from 'react';

import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet
} from 'react-native';





const style = StyleSheet.create({
  button: {
    width: "40%",
    height: "50%",
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  buttonText: {
    color: "#808080",
    fontSize: 17,
    fontWeight: '400',
  },
  buttonTextBorder: {
    height: 5,
    width: "75%",
    backgroundColor: "#808080",
    borderRadius: 50,
  },
})





const ButtonBack = ({  navigation }) => {
  return (
    <TouchableOpacity
      style={  style.button  }
      onPress={  () => navigation.navigate("User")  }
    >


      <View/>

      <Text style={  style.buttonText  }>Voltar</Text>

      <View style={  style.buttonTextBorder  }/>


    </TouchableOpacity>
  )
}

export default ButtonBack;