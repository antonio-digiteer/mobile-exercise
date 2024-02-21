import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Platform, Button } from 'react-native';

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
    <View style={styles.container}>
      <Text style={styles.text}>
        {greeting}
      </Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={handleNameChange}
        style={styles.input}
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Submit"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? 200 : 0,
    alignContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    margin: 10,
    width: '80%',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
});

export default GreetingApp;