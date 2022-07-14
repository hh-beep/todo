import React, { useState } from 'react';

import {
  View, 
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';





const style = StyleSheet.create({
  container: {
    width: "45%",
    height: "40%"
  },


  button: {
    width: "100%",
    height: "100%",
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '400',
    color: "#f2f2f2"
  },

  buttonFocus: {
    width: "100%",
    height: "100%",
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonTextFocus: {
    fontSize: 15,
    fontWeight: '400',
    color: "#FFBF8F"
  },
})





const ButtonCustomize = ({  navigation  }) => {
  
  const [isFocus, setIsFocus] = useState(false) 

  return (
    <View style={  style.container}>


      <TouchableOpacity
        style={  isFocus ? style.buttonFocus : style.button  }
        onPress={  () => navigation.navigate("CustomizeUser")  }
        onPressIn={  () => setIsFocus(true)  }
        onPressOut={  () => setTimeout(() => setIsFocus(false), 300)  }
      >
        <Text style={  isFocus ? style.buttonTextFocus : style.buttonText  }>Customizar</Text>
      </TouchableOpacity>
    
    
    </View>
  )
}

export default ButtonCustomize;