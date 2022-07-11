import React, { 
  useState, 
} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*Components */
import CreateUser from './CreateUser/CreateUser';



const Login = () => {
  
  const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="CreateUser"
        component={  CreateUser  }
        options={{  headerShown: false  }}
      />
    </Stack.Navigator>
  )
}

export default Login;