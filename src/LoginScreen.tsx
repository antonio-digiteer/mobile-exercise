import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import { styles } from "./styles";

export const LoginScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");
  const [submitted, setIsSubmitted] = useState(false);
  const handleNameChange = (text: string) => {
    setName(text);
    setIsSubmitted(false);
  };

  const isNotValid = () => {
    return name.trim() === "";
  };

  const timeChecker = () => {
    const currentTime = new Date().getHours();
    if (currentTime >= 0 && currentTime < 12) {
      return "Good Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const handleSubmit = () => {
    const newGreeting = timeChecker();
    console.log(greeting + "," + name);
    setGreeting(newGreeting);
    if (isNotValid()) {
      Alert.alert("Please enter your name");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
      navigation.navigate("DrawerNavigator", {
        screen: "HomeScreen",
        params: { submitted: submitted, greeting: newGreeting, name: name }
      });
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
