import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Keyboard } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styles from './style/style'; // Import your styles

// Screen for adding player name
// ... (previous code)

// Screen for adding player name
function AddPlayerNameScreen({ navigation }) {
  const [playerName, setPlayerName] = useState('');

  const handleOKPress = () => {
    // Handle player name submission and pass it as a parameter
    navigation.navigate('Rules', { playerName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pagename}>Home</Text>
      <Header />
      <TextInput
        placeholder="Enter Player Name"
        value={playerName}
        onChangeText={(text) => setPlayerName(text)}
        onSubmitEditing={handleOKPress}
        style={styles.playerNameInput}
      />
      <Button title="OK" onPress={handleOKPress} />
      <Footer />
    </View>
  );
}

// Screen for displaying rules and "Play" button
function RulesScreen({ route }) {
  const { playerName } = route.params; // Receive playerName from route.params

  return (
    <View style={styles.container}>
      <Text style={styles.pagename}>Rules</Text>
      <Text style={styles.rulesText}>
      Upper section of the classic Yahtzee dice game. 
You have 5 dices and for the every dice you have 3 throws. 
After each throw you can keep dices in order to get same 
dice spot counts as many as possible. In the end of the 
turn you must select your points from 1 to 6. 
Game ends when all points have been selected. The order for 
selecting those is free.
POINTS: After each turn game calculates the sum for the dices 
you selected. Only the dices having the same spot count are 
calculated. Inside the game you can not select same points from 
1 to 6 again.
GOAL: To get points as much as possible. 63 
points is the limit of getting bonus which gives you 50
points more.
      </Text>
     
      <Button title="Play" onPress={() => console.log('Play button pressed')} />
      <View style={styles.goodLuckContainer}>
        <Text style={styles.goodLuckText}>Good luck, {playerName}!</Text>
      </View>
      <Footer />
    </View>
  );
}



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="AddPlayerName" component={AddPlayerNameScreen} />
        <Tab.Screen name="Rules" component={RulesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}