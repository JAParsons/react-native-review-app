import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from '../components/card';
import { globalStyles } from '../styles/global';

export default ReviewDetails = ({ navigation }) => {
  const rating = navigation.getParam('rating');

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('title')}
        </Text>
        <Text style={globalStyles.titleText}>
          {navigation.getParam('body')}
        </Text>
        <View style={styles.rating}>
          <Text>BookZone rating: </Text>
          <Image source={images.ratings[rating]} style={styles.image} />
        </View>
      </Card>
    </View>
  );
};

const images = {
  ratings: {
    1: require('../assets/images/star-1.png'),
    2: require('../assets/images/star-2.png'),
    3: require('../assets/images/star-3.png'),
    4: require('../assets/images/star-4.png'),
    5: require('../assets/images/star-5.png')
  }
};

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee'
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  }
});
