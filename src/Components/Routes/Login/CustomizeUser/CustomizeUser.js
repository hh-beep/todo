import React, {
  useState,
  useEffect,
} from 'react';
import {  
  View, 
  Text,  
  StyleSheet
} from 'react-native';

/* Components */
import TextArea from './TextArea/TextArea';
import PhotoPicker from './PhotoPicker/PhotoPicker';
import UsernameInput from './UsernameInput/UsernameInput';
import Button from './Button/Button';

import auth from '@react-native-firebase/auth'





const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#243942"
  },
})





const CustomizeUser = ({  navigation  }) => {

  const user = auth().currentUser;

  const [username, setUsername] = useState("")
  const [newPhoto, setNewPhoto] = useState()

  return (
    <View style={  style.container  }>
      
      <TextArea />

      <PhotoPicker 
        newPhoto={  newPhoto  }
        oldPhoto={  user.photoURL  } 
        setNewPhoto={  setNewPhoto  }
      />

      <UsernameInput 
        username={  username  }
        setUsername={  setUsername  }
      />

      <Button 
        navigation={  navigation  }
        username={  username  }
        newPhoto={  newPhoto  }
      />


    </View>
  )
}

export default CustomizeUser;