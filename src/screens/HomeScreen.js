import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import JournalEntry from "../components/JournalEntry";
import Button from "../components/Button";

const journalEntries = [
  {
    id: 1,
    situation: "I'm worried about my presentation that I need to give.",
    threatCognition: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
    alternativeHypotheses: "People actually want to hear what I have to say.",
    whatActuallyHappened:
      "A colleague told me that it was the best presentation he's seen at work.",
  },
  {
    id: 2,
    situation: "I feel stuck in my job and my career.",
    threatCognition: "I'm not good enough and no one will hire me.",
    emotions: "Fear, depressed, sad",
    behaviours: "Avoid looking for job. Socially withdraw.",
    alternativeHypotheses: "I am highly employable.",
    whatActuallyHappened:
      "I applied to several roles and was invited to an interview!",
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back</Text>
      <Button
        title="Create a journal entry"
        onPress={() => navigation.navigate("Create Entry")}
      />
      <FlatList
        data={journalEntries}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("View Entry", item)}
            >
              <JournalEntry title={item.situation} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(journalEntry) => journalEntry.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export default HomeScreen;
