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

  const [list, setList] = useState([])
  const [hijo, setHijo] = useState()


  return (
    <TouchableOpacity
      onPress={  async () => {
        if(  !isTrash  ) {
          setIsTrash(  true  )
          database()
            .ref(`/List/${  userUid  }/`)
            .on("value", snap => {
              const list = Object.values(  snap.val()  ) 

              setList(  list  )

              list.forEach(  child => {
                if (  child.key == item.key  ) {
                  setHijo(  child  )
                }
              })

              
            })
        }
      }}
    >
      <Icon name="trash-2" size={35} color={  isTrash ? "#FFBF8F" : "#f2f2f2"  } />
    </TouchableOpacity>
  )
}

export default ButtonTrash