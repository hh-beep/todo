import React from 'react';

import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';





const style = StyleSheet.create({
  container: {
    width: "45%",
    height: "40%",
  },

  button: {
    width: "100%",
    height: "100%",
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '400',
    color: "#808080"
  },
  ButtonTextBorder: {
    height: 5,
    width: "100%",
    backgroundColor: "#808080",
    borderRadius: 50
  },
})





const ButtonConfigs = ({  navigation  }) => {
  return (
    <View style={  style.container  }>



      <TouchableOpacity
        style={  style.button  }
        onPress={  () => navigation.navigate("ConfigsUser")  }
      >


        <View />

        <Text style={  style.buttonText  }>configurações da conta</Text>

        <View style={  style.ButtonTextBorder} />


      </TouchableOpacity>



    </View>
  )
}

export default ButtonConfigs;