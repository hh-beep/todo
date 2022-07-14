import React from 'react';

import {
  View, 
  Text, 
  StyleSheet,
  Image
} from 'react-native';





const style = StyleSheet.create({
  container: {
    width: 190,
    height: 190,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 190/2,
    borderWidth: 2,
    borderColor: "#f2f2f2"
  },

  image: {
    resizeMode: 'cover',
    width: 180,
    height: 180,
    borderRadius: 180/2
  },
})





const UserPhoto = ({  photo  }) => {
  return (
    <View style={  style.container  }>
      <Image 
        source={{  uri: photo  }} 
        style={  style.image  } 
      />
    </View>
  )
}

export default UserPhoto