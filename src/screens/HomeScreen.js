import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import JournalEntry from "../components/JournalEntry";
import Button from "../components/Button";
import { JournalContext } from "../context/JournalContext";

const HomeScreen = ({ navigation }) => {
  const { journalEntries } = useContext(JournalContext);

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
