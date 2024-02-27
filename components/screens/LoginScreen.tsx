import * as React from 'react';
import { useState } from "react";
import { View, TextInput, Button, Alert, Text, StyleSheet } from 'react-native'; 
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen = ({ navigation }: Props) => {
  const [name, setName] = useState("");

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const handleSubmit = () => {
    if (name.trim() === "") {
      Alert.alert("Please enter your name");
    } else {
      navigation.navigate("Drawer");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello, what's your name?</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your name"
          value={name}
          onChangeText={handleNameChange}
          maxLength={20}
          style={styles.input}
          autoFocus={true} 
        />
        <Button title="Login" onPress={handleSubmit} disabled={!name.trim()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  greeting: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%', 
  },
});

export default LoginScreen;