import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ViewEntryScreen from "./src/screens/ViewEntryScreen";
import CreateEntryScreen from "./src/screens/CreateEntryScreen";
import EditEntryScreen from "./src/screens/EditEntryScreen";
import { JournalContextProvider } from "./src/context/JournalContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="View Entry"
          component={ViewEntryScreen}
          options={({ navigation, route }) => ({
            title: null,
            headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate("Edit Entry", { uuid: route.params.uuid })}>
                <Feather name="edit" style={styles.edit} />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="Create Entry"
          component={CreateEntryScreen}
          options={{ title: "Create a journal entry" }}
        />
        <Stack.Screen 
          name="Edit Entry"
          component={EditEntryScreen}
          options={{ title: "Edit a journal entry"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  edit: {
    fontSize: 24,
    color: "black",
  },
});

export default () => {
  return (
    <JournalContextProvider>
      <App />
    </JournalContextProvider>
  );
};
