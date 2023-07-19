import React from 'react';
import { View, FlatList, Text } from 'react-native';

const MyListComponent = () => {
  const data = [
    { id: '1', name: 'Anisha' },
    { id: '2', name: 'Jane' },
    { id: '3', name: 'Doe' },
    { id: '4', name: 'jenish' },
    { id: '5', name: 'Doe' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text style={{color:'#000',fontWeight:'500'}}>{item.name}</Text>
      </View>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyListComponent;
