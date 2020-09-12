import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';

export default Home = ({ navigation }) => {
  const pressHandler = () => {
    navigation.push('ReviewDetails');
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
      <Button title="go" onPress={pressHandler} />
    </View>
  );
};
