import React from 'react';

import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';





const style = StyleSheet.create({})





const ButtonInfo = ({  isTrash  }) => {
  return (
    <TouchableOpacity>
      <Icon name="more-vertical" size={35} color={  isTrash ? "#FFBF8F" : "#f2f2f2"  } />
    </TouchableOpacity>
  )
}

export default ButtonInfo