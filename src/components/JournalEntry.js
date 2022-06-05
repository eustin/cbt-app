import React from "react";
import { Text, View, StyleSheet } from "react-native";

const JournalEntry = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 10,
    marginTop: 5, 
    borderWidth: 1,
    borderColor: "gray",
  },
  title: {
    fontSize: 18,
  }
});

export default JournalEntry;
