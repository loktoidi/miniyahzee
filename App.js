import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Keyboard } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './style/style'; // Import your styles

export default function App() {
  const [playerName, setPlayerName] = useState('');
  const [isInputFocused, setInputFocused] = useState(true);

  useEffect(() => {
    // Automatically focus the input field when the component mounts
    if (isInputFocused) {
      inputRef.focus();
    }
  }, [isInputFocused]);

  // Function to handle the OK button press
  const handleOKPress = () => {
    // You can handle submitting the player's name here
    // For now, we'll just close the keyboard and set focus to false
    Keyboard.dismiss();
    setInputFocused(false);
  };

  let inputRef; // Declare inputRef here

  return (
    <View style={styles.container}>
      <Text style={styles.pagename}>Home</Text>
      <Header />
      <TextInput
        ref={(input) => {
          inputRef = input; // Reference to the input field
        }}
        placeholder={playerName ? '' : 'Enter Player Name'} // Use conditional placeholder
        placeholderTextColor={styles.placeholderText.color}
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
