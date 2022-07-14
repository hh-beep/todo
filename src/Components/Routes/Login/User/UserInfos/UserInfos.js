import React from 'react';

import {
  View, 
  Text, 
  StyleSheet
} from 'react-native';

/* Components */
import UserName from './UserName/UserName';
import UserPhoto from './UserPhoto/UserPhoto';





const style = StyleSheet.create({
  container: {
    flex: 1/2,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})





const UserInfos = ({  photo, username  }) => {
  return (
    <View style={  style.container  }>


      <UserPhoto photo={  photo  }/>

      <UserName username={  username  }/>


    </View>
  )
}

export default UserInfos;