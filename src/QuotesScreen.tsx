import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Button } from "@rneui/themed";

export const QuotesScreen = () => {
  return (
    <View>
      <View style={localStyle.container}>
        <Text style={styles.text}>
          Tap the button below to generate random quote
        </Text>
        <Button
          title="Generate Quote"
          containerStyle={localStyle.buttonContainer}
          buttonStyle={localStyle.button}
        />
      </View>
    </View>
  );
};

const localStyle = StyleSheet.create({
  container: {
    padding: 20,
    gap: 30
  },
  buttonContainer: {
    alignItems: "center"
  },
  button: {
    backgroundColor: "black",
    borderRadius: 6,
    width: "50%"
  }
});
