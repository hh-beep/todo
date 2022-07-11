import React from 'react';
import {  
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,  
} from 'react-native';





const style = StyleSheet.create({
  container: {
		width: "40%",
		height: "30%",
    justifyContent: 'space-around',
    alignItems: 'center',
	},

  button: {
    width: "100%",
    height: "100%",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomColor: "#808080",
  },
  buttonText: {
    color: "#808080",
    fontSize: 15,
    fontWeight: "700",
  },

  buttonBorder: {
    backgroundColor: "#808080",
    height: "7.5%",
    width: "60%",
    borderRadius: 5,
  }
})





const ButtonLogin = () => {
  return (
    <View style={  style.container  }>
      <TouchableOpacity 
        style={  style.button  }
      >


        <Text style={  style.buttonText  }>Login</Text>

        {/* So estilizacao */}
        <View style={  style.buttonBorder  }/>


      </TouchableOpacity>
    </View>
  )
}

export default ButtonLogin
