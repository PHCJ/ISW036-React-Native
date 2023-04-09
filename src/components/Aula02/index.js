import { Text, StyleSheet, View } from "react-native";
import React from "react";

const props = {
  min: 0,
  max: 10,
};

export default function NumberRandon() {
  const numbers = [];
  for (let i = 0; i < 5; i++) {
    const randomNumber = getRandomNumber(props);
    numbers.push(randomNumber);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.linha}>{numbers.join("\n")}</Text>

      <Text style={styles.soma}>
        Soma dos números:{" "}
        {numbers.reduce((total, current) => total + current, 0)}
      </Text>
    </View>
  );
}

const getRandomNumber = (props) => {
  return Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000",
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
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
