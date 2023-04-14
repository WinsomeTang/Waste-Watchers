import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HowToPlayPage({ navigation }) {
  const handleJoinGamePress = () => {
    console.log('Join Game button pressed');
    navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How to Play</Text>
      <Text style={styles.description}>
        Welcome to Waste Watchers! {'\n'}
        The coolest waste sorting game you will ever play! {'\n'}
        You will take on the role of a recycling expert who {'\n'} must sort different types of waste on a conveyor belt into their proper recycling bins. {'\n'}
        Which are as follows:
        - Mixed Recycling {'\n'}
        - Organics {'\n'}
        - E-waste {'\n'}
        - Landfill {'\n'}
        You will have to be quick and accurate, {'\n'}
        If you fail to sort the waste correctly, game over! {'\n'}
        But that is ok :), the more you play = the better you get, {'\n'}
        Best of Luck!
      </Text>
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
