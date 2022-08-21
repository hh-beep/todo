import React, { useEffect, useState } from 'react';

import {
  TouchableOpacity,
  StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Feather';

/* Firebase */
import database from '@react-native-firebase/database'
import auth from '@react-native-firebase/auth'





const style = StyleSheet.create({})





const ButtonTrash = ({  item, isTrash, setIsTrash  }) => {

  const userUid = auth().currentUser.uid;

  const [listItems, setListItems] = useState([])



  return (
    <TouchableOpacity
      onPress={  async () => {
        if(  !isTrash  ) {

          setIsTrash(  true  )


          await database()
            .ref(`/List/${  userUid  }/`)
            .on("value", snap => {
              const list = Object.values(  snap.val()  ) 

              list.forEach(  child => {
                if (  child.key == item.key  ) {

                  var index = list.indexOf(  child  )
                  list.splice(  index, 1  )

                  setListItems(  list  )
                }
              })
            })


          if (  listItems !== undefined  ) {
            await database()
              .ref(`/List/${  userUid  }`)
              .set(  Object.assign(  {}, listItems  )  )
          }
        }
      }}
    >
      <Icon name="trash-2" size={35} color={  isTrash ? "#FFBF8F" : "#f2f2f2"  } />
    </TouchableOpacity>
  )
}

export default ButtonTrash