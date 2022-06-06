import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

const Button = ({ title, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "black",
    alignItems: "center",
    paddingVertical: 10, 
    paddingHorizontal: 20,
    borderRadius: 7, 
    marginBottom: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
});

export default Button;
