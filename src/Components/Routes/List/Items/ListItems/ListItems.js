import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';

import Item from './Item/Item';





const style = StyleSheet.create({
  container: {
    flex: 3/5,
  },

  scroll: {
    flex: 3/5,
    /*borderTopColor: "#f2f2f2",
    borderTopWidth: 3,
    borderBottomColor: "#f2f2f2",
    borderBottomWidth: 3,*/
  }
})





const ListItems = ({  data, navigation  }) => {
  return (
    <View style={  style.container  }>
      <FlatList 
        style={  style.scroll  }
        data={  data  }
        renderItem={  ({  item  })  =>  <Item item={  item  } navigation={  navigation  }/>  }
        showsVerticalScrollIndicator={  false  }
      />
    </View>
  )
}

export default ListItems;