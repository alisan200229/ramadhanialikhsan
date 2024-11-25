import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Tebak angka antara 1-100!');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guess = parseInt(userGuess, 10);
    if (isNaN(guess)) {
      Alert.alert('Input tidak valid', 'Masukkan angka antara 1-100');
      return;
    }

    if (guess < randomNumber) {
      setMessage('Terlalu kecil, coba lagi!');
    } else if (guess > randomNumber) {
      setMessage('Terlalu besar, coba lagi!');
    } else {
      setMessage('Selamat! Anda menebak dengan benar!');
      setRandomNumber(generateRandomNumber());
    }
    setUserGuess('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tebak Angka</Text>
      <Text style={styles.instructions}>{message}</Text>
      <TextInput
        style={styles.input}
        value={userGuess}
        onChangeText={setUserGuess}
        placeholder="Masukkan angka"
        keyboardType="numeric"
      />
      <Button title="Tebak" onPress={handleGuess} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: '#34495e',
  },
  input: {
    height: 40,
    borderColor: '#2c3e50',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '80%',
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
});
