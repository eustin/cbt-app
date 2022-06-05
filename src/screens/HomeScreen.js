import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import JournalEntry from "../components/JournalEntry";

const journalEntries = [
  {
    id: 1,
    situation:
      "I'm worried about my presentation that I need to give.",
    threatCognition: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
    alternativeHypotheses: "People actually want to hear what I have to say.",
    whatActuallyHappened: "A colleague told me that it was the best presentation he's seen at work.",
  },
  {
    id: 2,
    situation:
      "I feel stuck in my job and my career.",
    threatCognition: "I'm not good enough and no one will hire me.",
    emotions: "Fear, depressed, sad",
    behaviours: "Avoid looking for job. Socially withdraw.",
    alternativeHypotheses: "I am highly employable.",
    whatActuallyHappened: "I applied to several roles and was invited to an interview!",
  },
];

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Welcome back!</Text>
      <FlatList
        data={journalEntries}
        renderItem={({ item }) => {
          return <JournalEntry title={item.situation} />;
        }}
        keyExtractor={(journalEntry) => journalEntry.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginVertical: 20,
  }
});

export default HomeScreen;
