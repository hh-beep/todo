import React, { 
  useState 
} from 'react';

import {  
  View, 
  Text, 
  TouchableOpacity,
  StyleSheet,
  Alert,  
} from 'react-native';

import auth from '@react-native-firebase/auth'





const style = StyleSheet.create({
  container: {
		width: "40%",
		height: "30%",
	},

  button: {
    width: "100%",
    height: "100%",
    justifyContent: 'space-around',
    alignItems: "center",
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5,
  },
  buttonText: {
    color: "#f2f2f2",
    fontSize: 15,
    fontWeight: "600",
  },

  buttonPress: {
    width: "100%",
    height: "100%",
    justifyContent: 'space-around',
    alignItems: "center",
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5,
  },
  buttonPressText: {
    color: "#FFBF8F",
    fontSize: 15,
    fontWeight: "600",
  },
})





const ButtonCreate = ({  navigation, email, pass  }) => {


  const [isPress, setIsPress] = useState(false)


  function createAlert (message) {
    return Alert.alert(
      'Erro na criação da conta',
      message
    )
  }


  function navigate() {
    if (  email.length !== 0 && pass.length !== 0  ) {
      auth().createUserWithEmailAndPassword(email, pass)
        .then(() => {
          navigation.navigate("Routes", {  
            user: {
              email: email,
              pass: pass,
            }
          })
        })
        .catch(  error => {
          switch (error.code) {
            case "auth/email-already-in-use": 
              createAlert('O email inserido é de uma conta ja existente')
              break
            case "auth/invalid-email": 
              createAlert('O email inserido é invalido')
              break
            case "auth/weak-password": 
              createAlert('A senha inserida é fraca')
              break
            default: 
              createAlert('Houve um erro durante a criação da conta')
              break
          }
        })
    }
    else {
      Alert.alert(
        'Erro na criação da conta',
        'Um ou os dois campos não tem valor'
      )
    }
  }


  return(
    <View style={  style.container  }>
      <TouchableOpacity
        style={(  isPress ? style.buttonPress : style.button  )}
        onPress={  () => navigate()  }
        onPressIn={  () => setIsPress(true)  }
        onPressOut={  () => setTimeout(() => setIsPress(false), 300)  }
      >
        <Text style={(  isPress ? style.buttonPressText : style.buttonText  )}>Criar</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ButtonCreate;