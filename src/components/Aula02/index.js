import { Text, StyleSheet } from "react-native";
import React from "react";

export default function NumberRandon(props) {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomNumber(props);
    numbers.push(randomNumber);
  }
  return (
    <>
      <Text style={styles.linha}>{numbers.join("\n")}</Text>

      <Text style={styles.soma}>
        Soma dos números: {numbers.reduce((total, current) => total + current, 0)}
      </Text>
    </>
  );
}

const getRandomNumber = (props) => {
  return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
};

const styles = StyleSheet.create({
  linha: {
    fontSize: 54,
    color: "blue",
  },
  soma: {
    color: "red",
    fontSize: 30,
    marginTop: 40,
  },
});
