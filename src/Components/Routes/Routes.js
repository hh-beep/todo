import React from 'react';
import {  createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import {  StyleSheet  } from 'react-native';

/* Components */
import Login from './Login/Login';
import List from './List/List';
import Routine from './Routine/Routine';
import Settings from './Settings/Settings';

/* Icon */
import Icon from "react-native-vector-icons/Feather";




const style = StyleSheet.create({
  tab: {
    borderTopWidth: 0,
    elevation: 0,
    height: 100,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})




const Routes = ({  route  }) => {
  
  const Tab = createBottomTabNavigator()
  
  return (
    <Tab.Navigator
      screenOptions={ ({  route  }) => ({
        tabBarIcon: ({  color  }) => {
          var iconName;
          var routeName = route.name

          switch (  routeName  ) {
            case "Login":
              iconName = "user"
              break
            case "List": 
              iconName = "list"
              break
            case "Routine":
              iconName = "clipboard"
              break
            case "Settings":
              iconName = "settings"
              break
            default:
              iconName = "x-circle"
              break
          }

          return <Icon name={  iconName  } size={  35  } color={  color  } />
        },
        headerShown: false,
        tabBarShowLabel: false,

        tabBarActiveTintColor: "#FFBF8F",
        tabBarInactiveTintColor: "#f2f2f2",

        tabBarActiveBackgroundColor: "#131E23",
        tabBarInactiveBackgroundColor: "#131E23",

        tabBarStyle: style.tab
      })} 
      initialRouteName="Login"
    >


      <Tab.Screen 
        name="Login"
        component={  Login  }
        initialParams={{  user: route.params.user  }}
      />
      <Tab.Screen 
        name="List"
        component={  List  }
      />

      <Tab.Screen 
        name="Routine"
        component={  Routine  }
      />

      <Tab.Screen 
        name="Settings"
        component={  Settings  }
      />



    </Tab.Navigator>
  )
}

export default Routes;