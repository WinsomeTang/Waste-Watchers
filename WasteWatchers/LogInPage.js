import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function LogInPage({ navigation }) {
    const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [error, setError] = useState('');

      const handleLogin = () => {
        // Check if username exists in the array
        const user = users.find((user) => user.username === username);
        if (!user) {
          setError('Username does not exist');
          return;
        }

        // Check if password matches
        if (user.password !== password) {
          setError('Incorrect password');
          return;
        }

        // Implement actions for login button press
        console.log('Login button pressed');
        // You can navigate to other screens or perform other actions here
      };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back !</Text>
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => {
          // Implement actions for log in button press
          console.log('Join Game! button pressed');
          // You can navigate to other screens or perform other actions here
        }}
      >
        <Text style={styles.buttonText}>Join game!</Text>
      </TouchableOpacity>
    </View>
  );
}

const users = []; // Array to store user objects


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
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    width: '80%',
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
