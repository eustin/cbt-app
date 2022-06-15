import React, { useContext } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import HomeScreen from "./src/screens/HomeScreen";
import ViewEntryScreen from "./src/screens/ViewEntryScreen";
import CreateEntryScreen from "./src/screens/CreateEntryScreen";
import EditEntryScreen from "./src/screens/EditEntryScreen";
import {
  JournalContext,
  JournalContextProvider,
} from "./src/context/JournalContext";

const Stack = createNativeStackNavigator();

// todo: extract header icons to own components
const App = () => {
  const { deleteEntry } = useContext(JournalContext);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="View Entry"
          component={ViewEntryScreen}
          options={({ navigation, route }) => ({
            title: null,
            headerRight: () => {
              const { uuid } = route.params;
              return (
                <>
                  <TouchableOpacity
                    onPress={() =>
                      deleteEntry(uuid, () => navigation.navigate("Home"))
                    }
                  >
                    <Feather name="delete" style={styles.delete} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("Edit Entry", {
                        uuid: uuid,
                      })
                    }
                  >
                    <Feather name="edit" style={styles.edit} />
                  </TouchableOpacity>
                </>
              );
            },
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
          options={{ title: "Edit a journal entry" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  edit: {
    fontSize: 32,
    color: "black",
    marginLeft: 15,
  },
  delete: {
    fontSize: 32,
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
