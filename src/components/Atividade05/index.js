import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AlphabetButton = ({ letter, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{letter}</Text>
  </TouchableOpacity>
);
const letterSounds = {
    A: 'á',
    B: 'bê',
    C: 'cê',
    D: 'dê',
    E: 'é',
    F: 'éfe',
    G: 'gê',
    H: 'agá',
    I: 'i',
    J: 'jóta',
    K: 'cá',
    L: 'éle',
    M: 'ême',
    N: 'êne',
    O: 'ó',
    P: 'pê',
    Q: 'quê',
    R: 'érre',
    S: 'ésse',
    T: 'tê',
    U: 'u',
    V: 'vê',
    W: 'dáblio',
    X: 'xis',
    Y: 'ípsilon',
    Z: 'zê',
  };
  
const AlphabetButtons = ({ onPress }) => {
  const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
  
  return (
    <>
    <View style={styles.boxView}>

    </View>
    <View style={styles.container}>
      {letters.map(letter => (
        <AlphabetButton key={letter} letter={letter} onPress={() => onPress(letter)} />
      ))}
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  boxView:{
    flex: 0.3,
    borderWidth:1,
  },
  button: {
    backgroundColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default AlphabetButtons;



