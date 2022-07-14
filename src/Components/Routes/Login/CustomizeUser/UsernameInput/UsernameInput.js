import React, { 
  useState,
  useEffect
} from 'react';

import {
  View,
  Text, 
  StyleSheet,
  TextInput,
} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';





const style = StyleSheet.create({
  container: {
    width: "80%",
    flex: 1/4,
    marginHorizontal: "10%",
    justifyContent: 'space-around',
  },

  input: {
    width: "100%",
    height: "40%",
    paddingHorizontal: 20,
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5,
    color: "#f2f2f2"
  },

  inputFocus: {
    width: "100%",
    height: "40%",
    paddingHorizontal: 20,
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5,
    color: "#FFBF8F",
  },
})





const UsernameInput = ({  username, setUsername  }) => {


  const [isFocus, setIsFocus] = useState()

  const inputStyle = useSharedValue(1)
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{  scale: inputStyle.value  }]
    }
  })

  useEffect(() => {
    if (  isFocus  ) {
      inputStyle.value = withTiming(1.025, {  duration: 250  })
    }
    else {
      inputStyle.value = withTiming(1, {  duration: 250  })
    }
  })


  return (
    <Animated.View style={[  style.container, animatedStyle  ]}>
      
      <TextInput 
        style={  isFocus ? style.inputFocus : style.input  }
        placeholder='Novo username'
        placeholderTextColor={  isFocus ? "#FFBF8F" : "#f2f2f2"  }
        value={  username  }
        onChangeText={  setUsername  }
        onFocus={  () => setIsFocus(true)  }
        onBlur={  () => setIsFocus(false)  }
      />

    </Animated.View>
  )
}

export default UsernameInput 