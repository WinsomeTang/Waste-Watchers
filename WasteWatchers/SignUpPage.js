import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { addUser } from './Users'; // Import the addUser function from Users.js

export default function SignUpPage({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignUp = () => {
    // Check for empty fields
    if (username === '' || password === '' || confirmPassword === '') {
      setError('Please fill out all fields');
      return;
    }

    // Check password requirements
    if (!validatePassword(password)) {
      setError('Password must be 6-16 characters, and have numbers and special characters');
      return;
    }

    // Check if password and confirm password match
    if (password !== confirmPassword) {
      setError('Password and confirm password do not match');
      return;
    }

    // Store username and password in an array
    const user = { username, password };
    addUser(user); // Call the addUser function from Users.js to add the user

    // Implement actions for sign up button press
    console.log('Join Game! button pressed');
    // You can navigate to other screens or perform other actions here

    navigation.navigate('LogIn');
  };

  const validatePassword = (password) => {
    // Password must be 6-16 characters
    if (password.length < 6 || password.length > 16) {
      return false;
    }

    // Password must have numbers and special characters
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,16}$/;
    return regex.test(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create your account</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />
      {error !== '' && <Text style={styles.errorText}>{error}</Text>}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  signupButton: {
    width: 200,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  signupButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    marginBottom: 10,
  },
});
