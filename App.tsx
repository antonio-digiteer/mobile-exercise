import { Icon } from "@rneui/themed";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

type ICON = {
  id: number;
  name: string;
  color: string;
};

const iconData: ICON[] = [
  {
    id: 1,
    name: "cards-heart",
    color: "red"
  },
  {
    id: 2,
    name: "cards-diamond",
    color: "red"
  },
  {
    id: 3,
    name: "cards-club",
    color: "black"
  },
  {
    id: 4,
    name: "cards-spade",
    color: "black"
  }
];

function App() {
  const [randomIcon, setRandomIcon] = useState<ICON | null>(null);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );

  const handleIcon = () => {
    const newIndex = getRandomIndex();
    setRandomIcon(iconData[newIndex]);
    setLastSelectedIndex(newIndex);
  };

  const getRandomIndex = () => {
    let newIndex = Math.floor(Math.random() * iconData.length);
    while (newIndex === lastSelectedIndex) {
      newIndex = Math.floor(Math.random() * iconData.length);
    }
    return newIndex;
  };

  return (
    <View>
      <Text>Hello World!</Text>
      {randomIcon && (
        <Icon
          type="material-community"
          name={randomIcon.name}
          color={randomIcon.color}
          size={40}
        />
      )}
      <Button onPress={handleIcon} title="Generate New Emoji" color="black" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default App;
