import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';


const GreetingApp = () => {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState("Hello, what's your name?");


  const handleNameChange = (text: string) => {
    setName(text);
  };



  const handleSubmit = () => {
    if (name) {

      const time = new Date().getHours();
      let timeGreeting;
      if (time >= 0 && time < 12) {
        timeGreeting = 'Good Morning';
      } else if (time >= 12 && time < 18) {
        timeGreeting = 'Good Afternoon';
      } else {
        timeGreeting = 'Good Evening';
      }

      setGreeting(`${timeGreeting}, ${name}!`);
    }
  };



  return (
    <View>
      <Text>
        {greeting}

      </Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}

      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default GreetingApp;
