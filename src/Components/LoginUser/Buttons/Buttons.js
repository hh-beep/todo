import React from 'react';
import {  
  View, 
  StyleSheet,  
  TouchableOpacity,
  Text
} from 'react-native';

/* Components */
import ButtonCreate from './ButtonCreate/ButtonCreate';
import ButtonLogin from './ButtonLogin/ButtonLogin';





const style = StyleSheet.create({
  container: {
    flex: 1/3,
    width: "90%",
    marginHorizontal: "5%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  }
})





const Buttons = ({  navigation, email, pass  }) => {
  return (
    <View style={  style.container  }>

      <ButtonCreate 
        navigation={  navigation  }
      />
      
      <ButtonLogin
        navigation={  navigation  }
        email={  email  }
        pass={  pass  }
      />

    </View>
  )
}

export default Buttons;