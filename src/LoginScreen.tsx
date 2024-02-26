import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { styles } from "./styles";

export const LoginScreen = () => {
  const [name, setName] = useState("");
  const [submitted, setIsSubmitted] = useState(false);
  const handleNameChange = (text: string) => {
    setName(text);
    setIsSubmitted(false);
  };

  const isNotValid = () => {
    return name.trim() === "";
  };

  const handleSubmit = () => {
    if (isNotValid()) {
      Alert.alert("Please enter your name");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Hello What's your name?</Text>
      </View>

      <Input
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
        style={styles.input}
        maxLength={20}
      />

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleSubmit} />
      </View>
    </View>
  );
};
