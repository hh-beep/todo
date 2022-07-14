import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';



const style = StyleSheet.create({
  container: {
    backgroundColor: "#243942",
    flex: 1,
  }
})



const Routine = () => {
  return (
    <View style={  style.container  }>
      <Text>Routine !</Text>
    </View>
  )
}

export default Routine;