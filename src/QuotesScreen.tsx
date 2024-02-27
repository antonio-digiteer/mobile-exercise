import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "./styles";
import { Button } from "@rneui/themed";

type QUOTE = {
  id: string;
  content: string;
  author: string;
};

export const QuotesScreen = () => {
  const [quote, setQuote] = useState<QUOTE>();

  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const json = await response.json();
      setQuote({ id: json.id, content: json.content, author: json.author });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={localStyle.container}>
        {quote ? (
          <>
            <Text style={styles.text}>"{quote.content}"</Text>
            <Text style={localStyle.author}>- {quote.author}</Text>
          </>
        ) : (
          <Text style={styles.text}>
            Tap the button below to generate random quote
          </Text>
        )}

        <Button
          title="Generate Quote"
          containerStyle={localStyle.buttonContainer}
          buttonStyle={localStyle.button}
          onPress={getQuote}
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
  },
  author: {
    fontSize: 16,
    alignSelf: "flex-end",
    color: "black",
    fontWeight: "700"
  }
});
