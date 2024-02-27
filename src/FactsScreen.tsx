import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

type Fact = {
  text: string;
};

export const FactsScreen = () => {
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
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          {/* <Text>Facts</Text> */}
          <Text>{fact}</Text>
          <Button title="Generate Fact" onPress={fetchFact} />
        </>
      )}
    </View>
  );
};
