import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Titulo from '../Title'
const AlphabetButton = ({ letter, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{letter}</Text>
  </TouchableOpacity>
);
const letterSounds = {
  A: "á",
  B: "bê",
  C: "cê",
  D: "dê",
  E: "é",
  F: "éfe",
  G: "gê",
  H: "agá",
  I: "i",
  J: "jóta",
  K: "cá",
  L: "éle",
  M: "ême",
  N: "êne",
  O: "ó",
  P: "pê",
  Q: "quê",
  R: "érre",
  S: "ésse",
  T: "tê",
  U: "u",
  V: "vê",
  W: "dáblio",
  X: "xis",
  Y: "ípsilon",
  Z: "zê",
};

const AlphabetButtons = ({ onPress }) => {
  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  const [letraSelecionada, setLetraSelecionada] = useState(
    "Selecione uma letra para saber seu som."
  );

  return (
    <View style={styles.container}>
      <Titulo titulo="ALFABETO"/>
      <View style={styles.boxView}>
        <Text style={styles.text2}>{letraSelecionada}</Text>
      </View>

      <View style={styles.letras}>
        {letters.map((letter) => (
          <AlphabetButton
            key={letter}
            letter={letter}
            onPress={() => setLetraSelecionada(letterSounds[letter])}
          />
        ))}
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: "center",
  },
  boxView: {
    flex: 0.5,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    marginTop:70,
    backgroundColor: "#ccc",
  },
  letras: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding:20,
  },
  button: {
    backgroundColor: "#ccc",
    borderRadius: 4,
    padding: 10,
    margin: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
  text2: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
});

export default AlphabetButtons;
