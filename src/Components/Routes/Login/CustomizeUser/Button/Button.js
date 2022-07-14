import React, {
  useState, 
  useEffect,
} from 'react';

import {
  View,
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import auth from '@react-native-firebase/auth'

/* Components */
import ButtonSave from './ButtonSave/ButtonSave';
import ButtonBack from './ButtonBack/ButtonBack';





const style = StyleSheet.create({
  container: {
    flex: 1/5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "90%",
    marginHorizontal: "5%"
  },
})





const Button = ({  navigation, username, newPhoto  }) => {
  return (
    <View style={  style.container  }>

      <ButtonBack 
        navigation={  navigation  } 
      />


      <ButtonSave 
        navigation={  navigation  }
        newPhoto={  newPhoto  }
        username={  username  }
      />


    </View>
  )
}

export default Button 