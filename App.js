import React from 'react';
import {  NavigationContainer  } from '@react-navigation/native';
import 'react-native-reanimated'
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

/* Components */
import Routes from "./src/Routes"



const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

export default App;
