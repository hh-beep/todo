import React, { useState } from 'react';

import {
  View,
  Text, 
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import { launchImageLibrary } from 'react-native-image-picker';





const style = StyleSheet.create({
  container: {
    width: 400,
    flex: 1/3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },


  image: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderColor: "#f2f2f2",
    borderWidth: 2,
  },


  buttonArea: {
    width: "20%",
    height: "100%",
    justifyContent: 'flex-end'
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: "#f2f2f2",
    borderWidth: 3,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonIcon: {},
})





const PhotoPicker = ({  newPhoto, oldPhoto, setNewPhoto  }) => {


  function setPhoto() {
    launchImageLibrary({  mediaType: "photo"  }, resp => {
      if (  resp.didCancel  ) {
        Alert.alert(
          'To Do App',
          'a galeria foi fechada'
        )
      }
      else if (  resp.errorCode !== undefined  ) {
        Alert.alert(
          'To Do App',
          resp.errorMessage
        )
      }
      else {
        setNewPhoto(  resp.assets.shift().uri  )
      }
    })
  }


  return (
    <View style={  style.container  }>
      
      <Image
        style={  style.image  }
        source={{  uri: newPhoto !== undefined ? newPhoto : oldPhoto }}
      />

      <View style={  style.buttonArea  }>
        <TouchableOpacity 
          onPress={  () => setPhoto()  }
          style={  style.button  }
        >
          <Icon name="camera" size={35} color="#f2f2f2"  />
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default PhotoPicker; 