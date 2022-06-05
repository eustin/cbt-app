import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ViewEntryScreen = ({ route }) => {
  const {
    situation,
    threatCognition,
    emotions,
    behaviours,
    alternativeHypotheses,
    whatActuallyHappened,
  } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.question}>What is the situation?</Text>
      <Text style={styles.answer}>{situation}</Text>

      <Text style={styles.question}>
        What thoughts are you having about it?
      </Text>
      <Text style={styles.answer}>{threatCognition}</Text>

      <Text style={styles.question}>What emotions are you experiencing?</Text>
      <Text style={styles.answer}>{emotions}</Text>

      <Text style={styles.question}>
        How are you behaving in response to the situation?
      </Text>
      <Text style={styles.answer}>{behaviours}</Text>

      <Text style={styles.question}>
        What are some positive alternative hypotheses?
      </Text>
      <Text style={styles.answer}>{alternativeHypotheses}</Text>

      <Text style={styles.question}>What actually happened?</Text>
      <Text style={styles.answer}>{whatActuallyHappened}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 15,
  },
  question: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  }, 
  answer: {
    fontSize: 18,
    marginBottom: 15,

  }
});

export default ViewEntryScreen;
