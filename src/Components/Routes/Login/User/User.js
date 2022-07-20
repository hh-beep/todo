import React, {  
  useState,
  useEffect  
} from 'react';

import {  
  View, 
  Text, 
  StyleSheet  
} from 'react-native';

/* Firebase Auth */
import auth from '@react-native-firebase/auth'

/* Async Storage */
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Components */
import TextArea from './TextArea/TextArea';
import UserInfos from './UserInfos/UserInfos';
import Buttons from './Buttons/Buttons';





const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243942",
  }
})





const User = ({  navigation, route  }) => {


  const user = auth().currentUser


  useEffect(() => {


    async function setAcountOnAsync() {
      const verifyAsync = await AsyncStorage.getItem("user")
    
      if (  verifyAsync === null  ) {
        await AsyncStorage.setItem("user", JSON.stringify(route.params.user))

        await user.updateProfile({  photoURL: "https://i.redd.it/e942x2087ax71.jpg"  })
      }   
    }
  

    async function setNewUserInfos() {
      if (  user.displayName === null  ) {
        await user.updateProfile({  displayName: `user${user.uid.slice(0, 7)}`  })
      }
      if (  user.photoURL === null  ) {
        await user.updateProfile({  photoURL: "https://i.redd.it/e942x2087ax71.jpg"  })
      }
    }


    setNewUserInfos()
    setAcountOnAsync()


  }, [])


  return (
    <View style={  style.container  }> 


      <TextArea 
        username={  user.displayName  }
      />

      <UserInfos 
        photo={  user.photoURL  }
        username={  user.displayName  }
      />

      <Buttons 
        navigation={  navigation  }
      />

    </View>
  )
}

export default User;