import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ViewEntryScreen from "./src/screens/ViewEntryScreen";
import CreateEntryScreen from "./src/screens/CreateEntryScreen";
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
          options={{ title: null }}
        />
        <Stack.Screen
          name="Create Entry"
          component={CreateEntryScreen}
          options={{ title: "Create a journal entry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <JournalContextProvider>
      <App />
    </JournalContextProvider>
  );
};
