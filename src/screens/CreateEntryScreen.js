import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import Button from "../components/Button";
import JournalInput from "../components/JournalInput";


/*{
  id: 1,
  situation: "I'm worried about my presentation that I need to give.",
  threatCognition: "No one will like my presentation.",
  emotions: "Worry, anxiety, fear",
  behaviours: "Phone in sick. Try to avoid giving presentation.",
  alternativeHypotheses: "People actually want to hear what I have to say.",
  whatActuallyHappened:
    "A colleague told me that it was the best presentation he's seen at work.",
},
*/

const CreateEntryScreen = ({ navigation }) => {
  const [situation, setSituation] = useState("");
  const [thoughts, setThoughts] = useState("");
  const [emotions, setEmotions] = useState("");
  const [behaviours, setBehaviours] = useState("");
  const [altHypotheses, setAltHypotheses] = useState("");
  const [reality, setReality] = useState("");

  return (
    <View style={styles.container}>
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
        placeholder="E.g. A colleague told me that it was the best presentation they'd seen at work."
        onChangeText={(newText) => setReality(newText)}
      />

      <Button title="Save"/>
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
});

export default CreateEntryScreen;
