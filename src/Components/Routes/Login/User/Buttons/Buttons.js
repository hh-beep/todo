import React from 'react';

import {
  View, 
  Text, 
  StyleSheet
} from 'react-native';
import ButtonConfigs from './ButtonConfigs/ButtonsConfigs';

/* Components */
import ButtonCustomize from './ButtonCustomize/ButtonCustomize';





const style = StyleSheet.create({
  container: {
    flex: 1/4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "90%",
    marginHorizontal: "5%",
    alignItems: 'center'
  }
})





const Buttons = ({  navigation  }) => {
  return (
    <View style={  style.container  }>


      <ButtonConfigs 
        navigation={  navigation  }
      /> 

      <ButtonCustomize 
        navigation={  navigation  }
      />


    </View>
  )
}

export default Buttons