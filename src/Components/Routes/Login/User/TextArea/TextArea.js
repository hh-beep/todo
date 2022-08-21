import React, {
  useEffect
} from 'react';

import {
  View, 
  Text, 
  StyleSheet
} from 'react-native';





const style = StyleSheet.create({
  container: {
    flex: 1/5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  containerText: {
    width: "80%",
    marginVertical: "10%",
    color: "#f2f2f2",
    fontSize: 25,
    fontWeight: '600',
    letterSpacing: 0.75
  },
})





const TextArea = ({  username  }) => {
  return (
    <View style={  style.container  }>
      <Text style={  style.containerText  }>Olá, {username}</Text>
    </View>
  )
}

export default TextArea;