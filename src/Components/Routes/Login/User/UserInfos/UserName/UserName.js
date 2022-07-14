import React from 'react';

import {
  View, 
  Text, 
  StyleSheet
} from 'react-native';





const style = StyleSheet.create({
  container: {
    height: "25%",
    width: "100%",
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  containerText: {
    fontSize: 17,
    fontWeight: '400',
    color: "#f2f2f2"
  },

  containerTextBorder: {
    height: 5,
    width: "35%",
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
  },
})





const UserName = ({  username  }) => {
  return (
    <View style={  style.container  }>

      <View />

      <Text style={  style.containerText  }>{username}</Text>

      <View style={  style.containerTextBorder }/>
    </View>
  )
}

export default UserName