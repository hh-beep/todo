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
    backgroundColor: "red"
	},
})





const ButtonCreate = () => {
  return(
    <View style={  style.container  }>
      <TouchableOpacity>
        <Text>Criar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCreate;