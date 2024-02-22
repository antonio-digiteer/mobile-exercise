import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Platform,
  Button,
  Alert
} from "react-native";

type EMOJI = {
  id: number;
  name: string;
  color: string;
};

const emojiData: EMOJI[] = [
  {
    id: 1,
    name: "emoji-flirt",
    color: "red"
  },
  {
    id: 2,
    name: "emoji-happy",
    color: "green"
  },
  {
    id: 3,
    name: "emoji-neutral",
    color: "grey"
  },
  {
    id: 4,
    name: "emoji-sad",
    color: "black"
  }
];

const GreetingApp = () => {
  const [name, setName] = useState("");
  const [submitted, setIsSubmitted] = useState(false);
  const [greeting, setGreeting] = useState("Hello, what's your name?");
  const [randomEmoji, setRandomEmoji] = useState<EMOJI | null>(null);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );

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
      if (name) {
        const time = new Date().getHours();
        let timeGreeting;
        if (time >= 0 && time < 12) {
          timeGreeting = "Good Morning";
        } else if (time >= 12 && time < 18) {
          timeGreeting = "Good Afternoon";
        } else {
          timeGreeting = "Good Evening";
        }
        setGreeting(`${timeGreeting}, ${name}!`);
        if (!randomEmoji) {
          const newIndex = getRandomIndex();
          setRandomEmoji(emojiData[newIndex]);
          setLastSelectedIndex(newIndex);
        }
      }
    }
  };

  const clearName = () => {
    if (name === "") {
      setGreeting("Hello, What's your name?");
    }
    setName("");
    setGreeting("Hello, What's your name?");
    setIsSubmitted(false);
    setRandomEmoji(null);
    setLastSelectedIndex(null);
  };

  const handleEmoji = () => {
    const newIndex = getRandomIndex();
    setRandomEmoji(emojiData[newIndex]);
    setLastSelectedIndex(newIndex);
  };

  const getRandomIndex = () => {
    let newIndex = Math.floor(Math.random() * emojiData.length);
    while (newIndex === lastSelectedIndex) {
      newIndex = Math.floor(Math.random() * emojiData.length);
    }
    return newIndex;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>{greeting}</Text>

        {randomEmoji && (
          <Icon
            type="entypo"
            name={randomEmoji.name}
            color={randomEmoji.color}
            size={40}
          />
        )}
      </View>

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
        style={styles.input}
        maxLength={20}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Clear"
          onPress={clearName}
          disabled={!submitted || isNotValid()}
        />
        <Button title="Submit" onPress={handleSubmit} />
        {submitted && (
          <Button title="Generate New Emoji" onPress={handleEmoji} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? 200 : 0,
    alignContent: "center",
    alignItems: "center"
  },
  header: {
    flexDirection: "row"
  },
  text: {
    fontSize: 25
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    margin: 10,
    width: "80%",
    borderRadius: 5
  },
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
    gap: 10
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  }
});

export default GreetingApp;
