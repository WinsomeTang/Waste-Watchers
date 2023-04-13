import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HowToPlayPage({ navigation }) {
  const handleJoinGamePress = () => {
    // Implement navigation or other actions for join game button press
    console.log('Join Game button pressed');
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Play</Text>
      <Text style={styles.description}>get good tbh.</Text>
      <TouchableOpacity
        style={styles.joinGameButton}
        onPress={handleJoinGamePress}
      >
        <Text style={styles.buttonText}>Join Game</Text>
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
  description: {
    marginHorizontal: 100,
    textAlign: 'center',
    marginBottom: 40
  },
  joinGameButton: {
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
