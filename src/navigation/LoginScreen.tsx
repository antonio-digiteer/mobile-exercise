import React, { useState } from "react";
import { Alert, View } from "react-native";
import { Button, Input, Text } from "@rneui/themed";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { styles } from "../styles/styles";

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
 const handleClearName = () => {
    setName("");
  };

  const handleSubmit = () => {
    const newGreeting = timeChecker();
    console.log(greeting + ", " + name);
    setGreeting(newGreeting);
    if (isNotValid()) {
      setIsSubmitted(false);
    return;
    } else {
      setIsSubmitted(true);
      navigation.navigate("DrawerNavigator", {
        screen: "Home",
        params: { submitted: submitted, greeting: newGreeting, name: name }
      });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Hello, what's your name?</Text>
      </View>

      <Input
        placeholder="Your Name"
        value={name}
        leftIcon={<Icon name="account-outline" size={20} />}
        rightIcon={<Icon name="close" size={20} onPress={handleClearName} />}
        onChangeText={handleNameChange}
        style={styles.input}
        maxLength={20}
      />

      <View>
        <Button title="Login" onPress={handleSubmit}
         disabled={name.trim() === ""}
        buttonStyle={styles.LoginButton}/>
      </View>
    </View>
  );
};
