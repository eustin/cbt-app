import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const journalEntries = [
  { 
    id: 1, 
    situation: "I'm worried about my presentation that I need to give tomorrow.",
    threatCognition: "No one will like my presentation.",
    emotions: "Worry, anxiety, fear",
    behaviours: "Phone in sick. Try to avoid giving presentation.",
  },
];


const HomeScreen = () => {
  return (
    <View>
      <Text>Welcome back!</Text>
      <FlatList 
        data={journalEntries}
        renderItem={({ item }) => {
          console.log(item);
          return (
            <View>
              <Text>{item.situation}</Text>
            </View>
          );
        }}
        keyExtractor={journalEntry => journalEntry.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
