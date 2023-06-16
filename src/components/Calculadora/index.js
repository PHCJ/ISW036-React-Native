import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Botao from "../Botao/index";

export default function Calculadora() {
  const [display, setDisplay] = useState("0");
  const [display2, setDisplay2] = useState(null);
  const [value, setValue] = useState(null);
  const [number, setNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  var total = 0.0;
  const operationButtons = ["+", "-", "*", "/", "="];
  const numberButtons = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(i + 48)
  );

  const valueEvent = (number) => {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(`${display}${number}`);
    }
    setNumber(parseFloat(number));
  };

  const operatorEvent = (oprt) => {
    const inputDisplay = parseFloat(display);
    if (oprt === "x²") {
      total = calculateValue(inputDisplay, 2, oprt);
      setValue(total);
      setDisplay(total);
      setDisplay2(`${display}${oprt}`);
    } else if (value === null) {
      const inputDisplay = parseFloat(display);
      setValue(inputDisplay);
      setDisplay(`${display}${oprt}`);
      setOperator(oprt);
    } else if (oprt === "=") {
      const newValue = String(calculateValue(value, number, operator));
      setDisplay(`${value} ${operator} ${number} = ${newValue}`);
      total = parseFloat(newValue);
    } else {
      const newValue = calculateValue(value, number, oprt);
      setValue(newValue);
      setDisplay2(`${display} = ${newValue}`);
      setDisplay(`${newValue}${oprt}`);
    }
  };

  const calculateValue = (value1, value2, operator) => {
    switch (operator) {
      case "+":
        return value1 + value2;
      case "-":
        return value1 - value2;
      case "*":
        return value1 * value2;
      case "/":
        return value1 / value2;
      case "x²":
        return value1 ** value2;
      case "x^":
        return value1 ** value2;
      default:
        return value2;
    }
  };

  const btnClean = () => {
    setDisplay("0");
    setDisplay2(null);
    setValue(null);
    setNumber(null);
  };
  const btnBackSpace = () => {
    setDisplay(display.slice(0, -1));
  };

  const equalsEvent = (value, number, oprt) => {};

  return (
    <View style={styles.container}>
      <View style={styles.contentBoxView}>
        <Text style={styles.boxView}>{display2}</Text>
        <Text style={styles.boxView}>{display}</Text>
      </View>
      <View style={styles.contentBoxButton}>
        <View style={styles.numBoxButton}>
          <Botao key={"C"} element={"C"} onPress={btnClean} />
          <Botao
            key={","}
            element={","}
            onPress={() => {
              valueEvent(",");
            }}
          />
          {numberButtons.map((element) => (
            <Botao
              key={element}
              element={element}
              onPress={() => {
                valueEvent(element);
              }}
            />
          ))}

          <Botao
            element={"X²"}
            onPress={() => {
              operatorEvent("x²");
            }}
          />
          <Botao
            element={"X^"}
            onPress={() => {
              operatorEvent("x^");
            }}
          />

          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
              margin: 8,
            }}
            onPress={btnBackSpace}
          >
            <Text style={{fontSize:30, paddingBottom:10}}>del</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.operationBoxButton}>
          {operationButtons.map((element) => (
            <Botao
              key={element}
              element={element}
              onPress={() => {
                operatorEvent(element);
              }}
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "90.3%",
    alignItems: "center",
    padding: 5,
    justifyContent: "space-around",
  },
  contentBoxView: {
    borderWidth: 1,
    flex: 0.3,
    width: "100%",
  },
  boxView: {
    height: "50%",
    textAlign: "right",
    textAlignVertical: "bottom",
    fontSize: 44,
    paddingRight: 20,
    paddingBottom: 20,
  },
  contentBoxButton: {
    flex: 0.65,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  numBoxButton: {
    width: "57.5%",
    flexDirection: "row",
    flexWrap: "wrap-reverse",
  },
  operationBoxButton: {
    width: "20%",
  },
});