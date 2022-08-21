import React, { 
  useEffect,
  useState 
} from 'react';

import { 
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Buttons from './Buttons/Buttons';





const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
    width: 350,
    marginHorizontal: 25,
    marginVertical: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },


  containerNormal: {
    borderColor: "#f2f2f2",
    borderWidth: 3,
    borderRadius: 12.5
  },
  containerTrash: {
    borderColor: "#FFBF8F",
    borderWidth: 3,
    borderRadius: 12.5
  },




  tittle: {
    width: "45%",
    fontSize: 15,
    fontWeight: 'bold',
  },


  tittleNormal: {  color: "#f2f2f2"  },
  tittleTrash: {  color: "#FFBF8F"  }
})





const Item = ({  item, navigation  }) => {

  const [isTrash, setIsTrash] = useState(false)



  return (
    <View style={[  style.container, (  isTrash ? style.containerTrash : style.containerNormal  )]}>

      <Text style={[  style.tittle, (  isTrash ? style.tittleTrash : style.tittleNormal  )]}>{  item.tittle  }</Text>

      <Buttons 
        item={  item  }
        isTrash={  isTrash  }
        setIsTrash={  setIsTrash  }
      />

    </View>
  )
}

export default Item; 