import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const JournalInput = ({ value, placeholder, onChangeText }) => {
  return (
    <TextInput 
        style={styles.input}
        multiline={true}
        numberOfLines={2}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
      />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 5,
    fontSize: 18,
  },
});

export default JournalInput;
