import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { styles } from "../styles/styles";
import { Button } from "@rneui/themed";

type QUOTE = {
  id: string;
  content: string;
  author: string;
};

export const Quotes = () => {
  const [quote, setQuote] = useState<QUOTE>();
  const getQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const quote: QUOTE = await response.json();
      setQuote(quote);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <View style={styles.apicontainer}>
        {quote ? (
          <>
            <Text style={styles.apitext}>"{quote.content}"</Text>
            <Text style={styles.author}>- {quote.author}</Text>
          </>
        ) : (
          <Text style={styles.text}>
            Tap the button below to generate random quote.
          </Text>
        )}

        <Button
          title="Generate Quote"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.apibutton}
          onPress={getQuote}
        />
      </View>
    </View>
  );
};
