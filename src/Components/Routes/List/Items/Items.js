import React, {
  useState,
  useEffect
} from 'react';

import {
  View, 
  Text, 
  StyleSheet,
  FlatList
} from 'react-native';

/* Firebase */
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'

/* Components */
import TextArea from './TextArea/TextArea';
import ListItems from './ListItems/ListItems';





const style = StyleSheet.create({
  container: {
    backgroundColor: "#243942",
    flex: 1,
    justifyContent: 'space-around',
  },
})





const Items = ({  navigation  }) => {

  const user = auth().currentUser;
  const [userItems, setUserItems] = useState([])   


  useEffect(() => {
    database()
      .ref(`/List/${  user.uid  }`)
      .on("value", snap => {

        if ( userItems !== Object.values(  snap.val()  )  ) {
          setUserItems(Object.values(  snap.val()  ))
        }

        if (  reloadItems  ) {
          setUserItems(Object.values(  snap.val()  ))
        }
      })
  })


  return (
    <View style={  style.container  }>

      <TextArea />

      <ListItems 
        data={  userItems  }
        navigation={  navigation  }
      />

    </View>
  )
}


export default Items