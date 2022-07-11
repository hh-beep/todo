import React, { 
  useState,
  useEffect,
} from 'react';

import {
  StyleSheet,  
  View,
  Text, 
  Alert,
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from "@react-native-firebase/auth" 

/* Components */
import Inputs from './Inputs/Inputs';
import Buttons from './Buttons/Buttons';
import TextArea from './TextArea/TextArea';





const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243942",
    flexDirection: 'column',
    justifyContent: 'space-around'
  }
})





const CreateUser = ({  navigation  }) => {
  
  const [user, setUser] = useState()

  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")
  
  return(
    <View style={  style.container  }>

      <TextArea/>

      <Inputs 
        email={  email  } setEmail={  setEmail  }
        pass={  pass  } setPass={  setPass  }
      />

      <Buttons/>
    </View>
  )
}

export default CreateUser;