import React, { useState } from 'react';

import {
  View,
  StyleSheet,
} from 'react-native'

/* Components */
import ButtonInfo from './ButtonInfo/ButtonInfo';
import ButtonTrash from './ButtonTrash/ButtonTrash';





const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: "40%",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
})





const Buttons = ({  item, isTrash, setIsTrash  }) => {
  return (
    <View style={  style.container  }>

      <ButtonTrash 
        item={  item  }
        isTrash={  isTrash  }
        setIsTrash={  setIsTrash  }
      />

      <ButtonInfo isTrash={  isTrash  }/>

    </View>
  )
}

export default Buttons