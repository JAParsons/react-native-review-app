import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default ReviewDetails = ({ navigation }) => {
  const pressHandler = () => {
    navigation.pop();
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>ReviewDetails Screen</Text>
      <Button title="go back" onPress={pressHandler} />
    </View>
  );
};
