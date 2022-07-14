import React, { 
  useEffect,
  useState, 
} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

/*Components */
import User from './User/User';
import CustomizeUser from './CustomizeUser/CustomizeUser';
import ConfigsUser from './ConfigsUser/ConfigsUser';





const Login = ({  route  }) => {
  
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator
      screenOptions={{  headerShown: false  }}
      initialRouteName="User"
    >



      <Stack.Screen
        name="User"
        component={  User  }
        initialParams={{  user: route.params.user  }}
      />

      <Stack.Screen
        name="CustomizeUser"
        component={  CustomizeUser  }
      />

      <Stack.Screen 
        name="ConfigsUser"
        component={  ConfigsUser  }
      />



    </Stack.Navigator>
  )
}

export default Login;