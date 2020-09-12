import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default Header = ({ navigation, title }) => {
  const toggleDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={toggleDrawer}
        style={styles.icon}
      />
      <View style={styles.headerTitle}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.headerImage}
        />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1
  },
  icon: {
    position: 'absolute',
    left: 16
  },
  headerImage: {
    width: 30,
    height: 30
  },
  headerTitle: {
    flexDirection: 'row'
  }
});