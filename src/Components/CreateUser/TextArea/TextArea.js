import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'






const style = StyleSheet.create({
  container: {
    flex: 1/4,
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  containerText: {
    width: "80%",
    marginHorizontal: "10%",
    fontSize: 22,
    fontWeight: '600',
    color: "#f2f2f2",
    letterSpacing: 0.75
  } 
})





const TextArea = () => {
  return (
    <View style={  style.container  }>
      <Text style={  style.containerText  }>Crie sua conta para salvar suas atividades</Text>
    </View>
  )
}

export default TextArea