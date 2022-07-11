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



const List = () => {
  return (
    <View style={  style.container  }>
      <Text>list !</Text>
    </View>
  )
}

export default List;