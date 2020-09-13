import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { globalStyles } from '../styles/global';

export default ReviewForm = ({ addReview }) => {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: '', body: '', rating: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          addReview(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={globalStyles.input}
              placeholder="Review Title"
              onChangeText={props.handleChange('title')}
              value={props.values.title}
            ></TextInput>

            <TextInput
              style={globalStyles.input}
              multiline
              placeholder="Review body"
              onChangeText={props.handleChange('body')}
              value={props.values.body}
            ></TextInput>

            <TextInput
              style={globalStyles.input}
              placeholder="Rating (1-5)"
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType="numeric"
            ></TextInput>

            <Button
              title="submit"
              color="maroon"
              onPress={props.handleSubmit}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};
