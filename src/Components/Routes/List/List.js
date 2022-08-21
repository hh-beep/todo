import React, {
  useState,
  useEffect
} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Components */
import Items from './Items/Items';



const List = ({  navigation  }) => {
  
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      initialRouteName="Items"
      screenOptions={{  headerShown: false  }}
    >



      <Stack.Screen 
        name="Items"
        component={  Items  }
      />



    </Stack.Navigator>
  )
}

export default List;