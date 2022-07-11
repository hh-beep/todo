import React from 'react';
import {  
  View, 
  StyleSheet,  
  TouchableOpacity,
  Text
} from 'react-native';

/* Components */
import ButtonCreate from './ButtonCreate/ButtonCreate';
import ButtonLogin from './ButtonLogin/ButtonLogin';





const style = StyleSheet.create({
  container: {
    flex: 1/3,
    width: "90%",
    marginHorizontal: "5%",
    borderColor: "#F2F2F2",
    borderWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
})





const Buttons = () => {
  return (
    <View style={  style.container  }>

      <ButtonLogin />

      <ButtonCreate />
      
    </View>
  )
}

export default Buttons