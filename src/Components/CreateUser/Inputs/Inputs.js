import React from 'react';
import {  
  View,
  StyleSheet,
} from 'react-native';

/* Components */
import InputEmail from './InputEmail/InputEmail';
import InputPass from './InputPass/InputPass';





const style = StyleSheet.create({
  container: {
    flex: 1/3,
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})





const Inputs = ({  email, setEmail, pass, setPass  }) => {
  return (
    <View style={  style.container  }>
      <InputEmail
        email={  email  }
        setEmail={  setEmail  }
      />
      <InputPass
        pass={  pass  }
        setPass={  setPass  }
      />
    </View>
  )
}

export default Inputs;