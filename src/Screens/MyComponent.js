import React from 'react';
import { View, FlatList, Text } from 'react-native';

const MyListComponent = () => {
  const data = [
    { id: '1', name: 'John' },
    { id: '2', name: 'Jane' },
    { id: '3', name: 'Doe' },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={{ padding: 10 }}>
        <Text>{item.name}</Text>
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
