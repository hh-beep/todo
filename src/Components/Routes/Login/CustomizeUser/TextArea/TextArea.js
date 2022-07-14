import React from 'react';

import {
  View,
  Text, 
  StyleSheet,
} from 'react-native';





const style = StyleSheet.create({
  container: {
    flex: 1/4,
    width: "90%",
    marginHorizontal: "5%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  containerTittle: {
    fontSize: 22,
    fontWeight: '600',
    color: "#f2f2f2",
    letterSpacing: 0.75,
  },
  containerText: {
    fontSize: 15,
    fontWeight: '600',
    color: "#808080",
    letterSpacing: 0.5
  },
})





const TextArea = () => {
  return (
    <View style={ style.container}>
      <Text style={  style.containerTittle  }>Edição de conta</Text>
      <Text style={  style.containerText  }>Customize seu perfil e depois salve as mudanças</Text>
    </View>
  )
}

export default TextArea 