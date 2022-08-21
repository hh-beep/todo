import React from 'react';

import {
  View,
  Text,
  StyleSheet
} from 'react-native';





const style = StyleSheet.create({
  container: {
    flex: 1/5,
    width: "80%",
    marginHorizontal: "10%",
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },

  containerText: {
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 0.75,
    color: "#f2f2f2"
  },
})





const TextArea = () => {
  return (
    <View style={  style.container  }>
      <Text style={  style.containerText  }>Lista de Tarefas</Text>
    </View>
  )
}

export default TextArea;