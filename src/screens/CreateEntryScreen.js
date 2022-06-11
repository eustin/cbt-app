import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Button from "../components/Button";
import JournalInput from "../components/JournalInput";
import { JournalContext } from "../context/JournalContext";

const CreateEntryScreen = ({ navigation }) => {
  const [situation, setSituation] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotions, setEmotions] = useState("");
  const [behaviours, setBehaviours] = useState("");
  const [altHypotheses, setAltHypotheses] = useState("");
  const [reality, setReality] = useState("");
  const [error, setError] = useState();

  const { addEntry } = useContext(JournalContext);

  const onPressHandler = () => {
    validateInputs();
    if (error === null) {
      addEntry(
        situation,
        thoughts,
        emotions,
        behaviours,
        altHypotheses,
        reality,
        () => navigation.navigate("Home")
      );
    }
  };

  const validateInputs = () => {
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

    setError(null);
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

export default CreateEntryScreen;
