import React, { useState, useEffect } from "react";
import { View, Text} from "react-native";
import { Button } from "@rneui/themed";
import {styles} from '../styles/styles';


type Fact = {
  text: string;
};

export const Facts = () => {
  const [fact, setFact] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const fetchFact = async () => {
    setLoading(true);
    try {

      const response = await fetch(
        "https://uselessfacts.jsph.pl/api/v2/facts/random"
      );
      const data: Fact = await response.json();
      setFact(data.text);
    } catch (error) {
      console.error("Error fetching fact:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {

    setFact("Tap the button below to generate a fact.");
  
  }, []);

  return (
  
  <View>
    <View style={styles.apicontainer}>
      <Text style={fact === "Tap the button below to generate a fact." ? styles.initialText : styles.apitext}>
        {fact}
      </Text>
      <Button
        title="Generate Fact"
        containerStyle={styles.buttonContainer}
        buttonStyle={styles.apibutton}
        onPress={fetchFact}
      />
    </View>
  </View>

  );
};