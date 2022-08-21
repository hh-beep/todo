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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: "#808080",
  },
  buttonText: {
    color: "#808080",
    fontSize: 15,
    fontWeight: "600",
  },

  buttonBorder: {
    backgroundColor: "#808080",
    height: "7.5%",
    width: "60%",
    borderRadius: 5,
  }
})





const ButtonLogin = ({  navigation  }) => {
  return (
    <View style={  style.container  }>
      <TouchableOpacity 
        style={  style.button  }
        onPress={  () => navigation.navigate("LoginUser")  }
      >

        {/* Just style */}
        <View />



        <Text style={  style.buttonText  }>Login</Text>



        {/* Just style */}
        <View style={  style.buttonBorder  }/>


      </TouchableOpacity>
    </View>
  )
}

export default ButtonLogin
