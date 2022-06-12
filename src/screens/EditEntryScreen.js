import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { JournalContext } from "../context/JournalContext";
import Button from "../components/Button";
import JournalInput from "../components/JournalInput";

// todo: EditEntryScreen and CreateEntryScreen share common code. need to extract 
//       common functionality into separate component 
const EditEntryScreen = ({ navigation, route }) => {
  const { journalEntries, editEntry } = useContext(JournalContext);
  const { uuid } = route.params;
  const journalEntry = journalEntries.find(
    (journalEntry) => journalEntry.uuid === uuid
  );

  const [error, setError] = useState();
  const [situation, setSituation] = useState(journalEntry.situation);
  const [thoughts, setThoughts] = useState(journalEntry.thoughts);
  const [emotions, setEmotions] = useState(journalEntry.emotions);
  const [behaviours, setBehaviours] = useState(journalEntry.behaviours);
  const [altHypotheses, setAltHypotheses] = useState(
    journalEntry.altHypotheses
  );
  const [reality, setReality] = useState(journalEntry.reality);

  const onPressHandler = () => {
    if (situation === "") {
      setError("Please describe the situation");
      return;
    }

    if (thoughts === "") {
      setError("Please describe the thougths you're having");
      return;
    }

    if (emotions === "") {
      setError("Please describe the emotions your experiencing");
      return;
    }

    if (behaviours === "") {
      setError("Please describe the behaviours you're exhibiting");
      return;
    }

    if (altHypotheses === "") {
      setError("Please describe any positive alternative hypotheses");
      return;
    }

    if (behaviours === "") {
      setError("Please describe the behaviours you're exhibiting");
      return;
    }

    if (reality === "") {
      setError("Please describe what actually happened");
      return;
    }

    editEntry(
      uuid,
      situation,
      thoughts,
      emotions,
      behaviours,
      altHypotheses,
      reality,
      () => navigation.pop()
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.question}>What is the situation?</Text>
        <JournalInput
          value={situation}
          placeholder="E.g. I need to give a presentation."
          onChangeText={(newText) => setSituation(newText)}
        />

        <Text style={styles.question}>
          What thoughts are you having about it?
        </Text>
        <JournalInput
          value={thoughts}
          placeholder="E.g. No one will like it."
          onChangeText={(newText) => setThoughts(newText)}
        />

        <Text style={styles.question}>What emotions are you experiencing?</Text>
        <JournalInput
          value={emotions}
          placeholder="E.g. Worry, anxiety, fear"
          onChangeText={(newText) => setEmotions(newText)}
        />

        <Text style={styles.question}>
          How are you behaving in response to the situation?
        </Text>
        <JournalInput
          value={behaviours}
          placeholder="E.g. Call in sick. Avoid giving presentation."
          onChangeText={(newText) => setBehaviours(newText)}
        />

        <Text style={styles.question}>
          What are some positive alternative hypotheses?
        </Text>
        <JournalInput
          value={altHypotheses}
          placeholder="E.g. People actually want to hear what I have to say."
          onChangeText={(newText) => setAltHypotheses(newText)}
        />

        <Text style={styles.question}>What actually happened?</Text>
        <JournalInput
          value={reality}
          placeholder="E.g. A colleague told me that it was the best presentation they'd seen at work!"
          onChangeText={(newText) => setReality(newText)}
        />

        <Text style={styles.error}>{error}</Text>

        <Button
          title="Save"
          disabled={Boolean(error)}
          onPress={onPressHandler}
        />
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
  error: {
    color: "red",
    fontSize: 18,
  },
});

export default EditEntryScreen;
