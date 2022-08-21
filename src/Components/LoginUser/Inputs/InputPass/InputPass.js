import React, {
  useState,
  useEffect
} from 'react';

import {
  View,
  TextInput, 
  StyleSheet
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import InputStyle from '../InputStyle';





const style = InputStyle;





const InputPass = ({  pass, setPass  }) => {
  const [passFocus, setPassFocus] = useState(false)  

  const inputStyle = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{  scale: inputStyle.value  }]
    }
  })
  useEffect(() => {
    if (  passFocus  ) {
      inputStyle.value = withTiming(1.025, {  duration: 250  })
    }
    else {
      inputStyle.value = withTiming(1, {  duration: 250 })
    }
  })

  return (
    <Animated.View style={[  style.container, animatedStyle  ]}>
      <TextInput
        autoComplete='password'
        value={  pass  }
        onChangeText={  setPass  }
        style={(  passFocus ? style.inputFocus : style.input  )}
        onFocus={  () => setPassFocus(true)  }
        onBlur={  () => setPassFocus(false)  }
        placeholder="Senha"
        placeholderTextColor={passFocus ? "#FFBF8F" : "#F2F2F2"}
        secureTextEntry={true}
      />
    </Animated.View>
  )
}

export default InputPass;