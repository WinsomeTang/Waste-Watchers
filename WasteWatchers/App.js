import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignUpPage from './SignUpPage';
import LogInPage from './LogInPage';
import GamePage from './GamePage';
import HowToPlayPage from './HowToPlayPage';


async function changeScreenOrientation() {
  await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_LEFT);
}

const Stack = createStackNavigator();

export default function App() {
  changeScreenOrientation();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
        <Stack.Screen name="LogIn" component={LogInPage} />
        <Stack.Screen name="WhyAccount" component={WhyAccountPage} />
        <Stack.Screen name="Game" component={GamePage} />
        <Stack.Screen name="HowToPlay" component={HowToPlayPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  const handleSignUpPress = () => {
    // Implement navigation or other actions for sign up button press
    console.log('Sign Up button pressed');
    navigation.navigate('SignUp');
  };

  const handleLogInPress = () => {
    // Implement navigation or other actions for log in button press
    console.log('Join Game button pressed');
    navigation.navigate('LogIn');
  };

  const handleWhyAccountPress = () => {
    // Implement navigation or other actions for Why Account button press
    console.log('Why Account button pressed');
    navigation.navigate('WhyAccount');
  };

  const handleQuickPlayPress = () => {
      // Implement navigation or other actions for Why Account button press
      console.log('Quick Play button pressed');
      navigation.navigate('Game');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Waste Watchers</Text>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={handleLogInPress}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignUpPress}
      >
        <Text style={styles.signupButtonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.questionButton}
        onPress={handleWhyAccountPress}
      >
        <Text style={styles.questionButtonText}>Why create an account?</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleQuickPlayPress}
      >
        <Text style={styles.signupButtonText}>Quick Play</Text>
      </TouchableOpacity>

    </View>
  );
}

function WhyAccountPage({ navigation }) {
  const handleSignUpPress = () => {
    // Implement navigation or other actions for sign up button press
    console.log('Sign Up button pressed');
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why create an account?</Text>
      <Text style={styles.description}>
        Creating an account allows you to access the game. As the game is still in beta we require all users to create an account before they can play. It also allows you to provide us with your feedback so we can continue developing an educational game, that you want to play. Thanks for your understanding and have fun!
      </Text>
      <TouchableOpacity
        style={styles.signupButton}
        onPress={handleSignUpPress}
      >
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
  loginButton: {
    width: 200,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  signupButton: {
    width: 200,
    backgroundColor: 'white', // Removed fixed width
    borderWidth: 1,
    borderColor: 'black',
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
  signupButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionButton: {
    backgroundColor: 'white', // Removed fixed width
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10, // Added margin top for spacing
  },
  questionButtonText: {
    color: 'blue', // Updated text color
    fontSize: 12, // Updated font size to 12
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline', // Added underline
  },
  description: {
    marginHorizontal: 100, // Add margin horizontal of 50px
    textAlign: 'center', // Add text alignment to center
    marginBottom: 40
  }
});