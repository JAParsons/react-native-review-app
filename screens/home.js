import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet
} from 'react-native';
import Card from '../components/card';
import ReviewForm from '../components/reviewForm';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default Home = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  const [reviews, setReviews] = useState([
    { title: 'book 1', rating: 4, body: 'loren ipsum', key: '1' },
    { title: 'book 2', rating: 2, body: 'loren ipsum', key: '2' },
    { title: 'book 3', rating: 3, body: 'loren ipsum', key: '3' }
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModal(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal visible={modal} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalOpen, ...styles.modalClose }}
            onPress={() => setModal(false)}
          />
          <ReviewForm addReview={addReview} />
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalOpen}
        onPress={() => setModal(true)}
      />

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

const styles = StyleSheet.create({
  modalOpen: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0
  },
  modalContent: {
    flex: 1
  }
});
