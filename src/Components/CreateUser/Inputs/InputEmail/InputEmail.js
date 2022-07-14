import React, {  
  useState,
  useEffect
} from 'react';

import {
  TextInput,
  View
} from 'react-native';

import InputStyle from '../InputStyle';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';





const style = InputStyle;





const InputEmail = ({  email, setEmail  }) => {

  const [emailFocus, setEmailFocus] = useState(false)

  const inputStyle = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{  scale: inputStyle.value  }]
    }
  })

  useEffect(() => {
    if (  emailFocus  ) {
      inputStyle.value = withTiming(1.025, {  duration: 250  })
    }
    else {
      inputStyle.value = withTiming(1, {  duration: 250 })
    }
  })

  return(
    <Animated.View style={[  style.container, animatedStyle  ]}>
      <TextInput
        autoComplete='email'
        value={  email  }
        onChangeText={  setEmail  }
        style={(  emailFocus ? style.inputFocus : style.input  )}
        onFocus={  () => setEmailFocus(true)  }
        onBlur={  () => setEmailFocus(false)  }
        placeholder="Email"
        placeholderTextColor={emailFocus ? "#FFBF8F" : "#F2F2F2"}
      />
    </Animated.View>
  )
}

export default InputEmail;