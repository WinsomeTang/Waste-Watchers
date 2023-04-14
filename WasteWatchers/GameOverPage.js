import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {score} from './GamePage';


export default function GameOverPage({ navigation }) {
  const handleHomePress = () => {
    console.log('Home button pressed');
    navigation.navigate('Home');
  };
  return (
        <View style={styles.container}>
          <Text style={styles.title}>Game Over ! :(</Text>
          <Text style={styles.score}>
          Current Score: 1{score}
          </Text>
          <TouchableOpacity
            style={styles.homeButton}
            onPress={handleHomePress}
          >
            <Text style={styles.buttonText}>Back To Home</Text>
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
  score: {
    marginHorizontal: 100,
    textAlign: 'center',
    marginBottom: 40
  },
  homeButton: {
    width: 200,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
