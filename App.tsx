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

    const clearName = () => {
    if (name === '') {
      setGreeting("Hello, What's your name?");
    }
    setName('');
      setGreeting("Hello, What's your name?");
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
        maxLength={20}/>

         <Button title="Clear"  onPress={clearName} disabled={!name.trim()}/>
         <Button title="Submit" onPress={handleSubmit} />
         <Button title="Generate New Emoji"/>
    </View>
  );
};

export default GreetingApp;
