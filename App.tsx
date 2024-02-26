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
  const [greeting, setGreeting] = useState("");
  const [submitted, setIsSubmitted] = useState(false);
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

  const currentTime = new Date().getHours();
  const timeChecker = () => {
    if (currentTime >= 0 && currentTime < 12) {
      return "Good Morning";
    } else if (currentTime >= 12 && currentTime < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const handleSubmit = () => {
    if (isNotValid()) {
      Alert.alert("Please enter your name");
      setIsSubmitted(false);
    } else {
      setIsSubmitted(true);
      setGreeting(timeChecker());
      if (!randomEmoji) {
        const newIndex = getRandomIndex();
        setRandomEmoji(emojiData[newIndex]);
        setLastSelectedIndex(newIndex);
      }
    }
  };

  const clearName = () => {
    setName("");
    setGreeting("");
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
        {submitted ? (
          <Text style={styles.text}>
            {greeting}, {name}!
          </Text>
        ) : (
          <Text style={styles.text}>Hello What's your name?</Text>
        )}

        {submitted && randomEmoji && (
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
