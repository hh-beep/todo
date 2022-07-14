import React from 'react';

import {
  View,
  Text, 
  StyleSheet,
  Button
} from 'react-native'





const style = StyleSheet.create({})





const ConfigsUser = ({  navigation  }) => {
  return (
    <View>
      <Button 
        title='ir para user'
        onPress={  () => navigation.navigate("User")  }
      />
    </View>
  )
}

export default ConfigsUser