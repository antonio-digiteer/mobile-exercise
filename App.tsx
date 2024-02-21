import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";

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
    <View>
      <Text>{greeting}</Text>
      {randomEmoji && (
        <Icon
          type="entypo"
          name={randomEmoji.name}
          color={randomEmoji.color}
          size={40}
        />
      )}

      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
        maxLength={20}
      />

      <Button
        title="Clear"
        onPress={clearName}
        disabled={!submitted || isNotValid()}
      />

      <Button title="Submit" onPress={handleSubmit} />
      {submitted && <Button title="Generate New Emoji" onPress={handleEmoji} />}
    </View>
  );
};

export default GreetingApp;
