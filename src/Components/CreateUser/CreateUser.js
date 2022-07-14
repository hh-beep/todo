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

/* Components */
import Inputs from './Inputs/Inputs';
import Buttons from './Buttons/Buttons';
import TextArea from './TextArea/TextArea';





const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243942",
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingBottom: 75,
  }
})





const CreateUser = ({  navigation  }) => {


  const [pass, setPass] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    async function verify() {

      const verifyAsync = await AsyncStorage.getItem("user")

      if (  verifyAsync !== null  ) {
        navigation.navigate("Routes", {  user: JSON.parse(verifyAsync)  })
      }
    }

    verify()
  }, [])

  return(
    <View style={  style.container  }>

      <TextArea/>

      <Inputs 
        email={  email  } setEmail={  setEmail  }
        pass={  pass  } setPass={  setPass  }
      />

      <Buttons
        navigation={  navigation  } 
        email={  email  }
        pass={  pass  }
      />
    </View>
  )
}

export default CreateUser;