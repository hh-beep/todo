import React from 'react';

import {  NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/* Components */
import Routes from './src/Components/Routes/Routes'
import CreateUser from './src/Components/CreateUser/CreateUser';
import LoginUser from './src/Components/LoginUser/LoginUser';



const App = () => {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{  headerShown: false  }}
        initialRouteName="CreateUser"
      >
        <Stack.Screen
          name="CreateUser"
          component={  CreateUser  }
        />
        <Stack.Screen 
          name="LoginUser"
          component={  LoginUser  }
        />
        <Stack.Screen
          name="Routes"
          component={  Routes  }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
