import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ViewEntryScreen = ({ route }) => {
  const { situation, thoughts, emotions, behaviours, altHypotheses, reality } =
    route.params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.question}>What is the situation?</Text>
        <Text style={styles.answer}>{situation}</Text>

        <Text style={styles.question}>
          What thoughts are you having about it?
        </Text>
        <Text style={styles.answer}>{thoughts}</Text>

        <Text style={styles.question}>What emotions are you experiencing?</Text>
        <Text style={styles.answer}>{emotions}</Text>

        <Text style={styles.question}>
          How are you behaving in response to the situation?
        </Text>
        <Text style={styles.answer}>{behaviours}</Text>

        <Text style={styles.question}>
          What are some positive alternative hypotheses?
        </Text>
        <Text style={styles.answer}>{altHypotheses}</Text>

        <Text style={styles.question}>What actually happened?</Text>
        <Text style={styles.answer}>{reality}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  },
});

export default ViewEntryScreen;
