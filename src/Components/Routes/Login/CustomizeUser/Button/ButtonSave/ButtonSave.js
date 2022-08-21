import React, {
  useState
} from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

import auth from '@react-native-firebase/auth'





const style = StyleSheet.create({
  button: {
    width: "40%",
    height: "50%",
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '400',
    color: "#f2f2f2",
  },

  buttonFocus: {
    width: "40%",
    height: "50%",
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonTextFocus: {
    fontSize: 17,
    fontWeight: '400',
    color: "#FFBF8F",
  },
})





const ButtonSave = ({  navigation, username, newPhoto  }) => {

  const [isFocus, setIsFocus] = useState(false)


  const user = auth().currentUser;

  
  async function navigate() {

    if ((  username !== user.displayName  )  &&  (  username.length <= 25 && username.length > 0  )) {
      await user.updateProfile({  displayName: username  })
    }
    else {
      await user.updateProfile({  displayName: user.displayName  })
    }


    if (  newPhoto !== user.photoURL  ) {
      await user.updateProfile({  photoURL: newPhoto  })
    }

  
    navigation.navigate("User")
  }


  return (
    <TouchableOpacity
      style={  isFocus ? style.buttonFocus : style.button  }
      onPress={  () => navigate()  }
      onPressIn={  () => setIsFocus(true)  }
      onPressOut={  () => setTimeout(() => setIsFocus(false), 300)  }
    >


      <Text style={  isFocus ? style.buttonTextFocus : style.buttonText  }>Salvar</Text>


    </TouchableOpacity>
  )
}

export default ButtonSave;