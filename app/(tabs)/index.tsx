import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function HomeScreen() {
  const [randomNumber] = useState(generateRandomNumber());
  const [userGuess, setUserGuess] = useState('');

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guess = parseInt(userGuess, 10);
    if (isNaN(guess)) {
      Alert.alert('Input tidak valid', 'Masukkan angka antara 1-100');
      return;
    }

    if (guess === randomNumber) {
      Alert.alert('Selamat!', 'Anda menebak dengan benar!');
    } else {
      Alert.alert('Salah', 'Coba lagi!');
    }

    setUserGuess('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tebak Angka</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
