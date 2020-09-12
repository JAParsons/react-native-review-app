import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../styles/global';

export default Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: 'book 1', rating: 4, body: 'loren ipsum', key: '1' },
    { title: 'book 2', rating: 2, body: 'loren ipsum', key: '2' },
    { title: 'book 3', rating: 3, body: 'loren ipsum', key: '3' }
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item: review }) => (
          <TouchableOpacity
            onPress={() => navigation.push('ReviewDetails', review)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{review.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
