import React, { useState } from "react";
import { View } from "react-native";
import { Button, Icon, Text } from "@rneui/themed";
import { EMOJI, emojiData } from "../styles/dummyData";
import { styles } from "../styles/styles";

export const Home = ({ route }: any) => {
  const { greeting, name } = route.params;
  const [randomEmoji, setRandomEmoji] = useState<EMOJI | null>(null);
  const [lastSelectedIndex, setLastSelectedIndex] = useState<number | null>(
    null
  );

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

  if (!randomEmoji) {
    const newIndex = getRandomIndex();
    setRandomEmoji(emojiData[newIndex]);
    setLastSelectedIndex(newIndex);
  }

  return (
    <View style={styles.homecontainer}>
      <Text style={styles.text} h3>
        {greeting}, {name}! {""}
        {randomEmoji && (
          <Icon
            type="entypo"
            name={randomEmoji.name}
            color={randomEmoji.color}
            size={50}
          />
        )}
      </Text>
        
      <Button title="Generate New Emoji" 
      onPress={handleEmoji}
      buttonStyle={styles.EmojiButton}
       />
    
      <Button title="Logout"
      buttonStyle={styles.LogoutButton}/>

    </View>
  );
};
