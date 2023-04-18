import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Botao from '../Botao/index'
//import FontAwesome from '@expo/vector-icons/FontAwesome';


const index = () => {
  const operationButtons = ["+", "-", "*", "/", "="];
  const numberButtons = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(i + 48)
  );

  const [icalc, setIcalc] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.contentBoxView}>
        <Text style={styles.boxView}>{icalc}</Text>
      </View>
      <View style={styles.contentBoxButton}>

        <View style={styles.numBoxButton}>
          <Botao></Botao>
          <Botao key={","} element={","} onPress={() => { setIcalc(',') }}></Botao>
          {numberButtons.map((element) =>
            (<Botao key={element} element={element} onPress={() => { setIcalc(numberButtons[element]) }} />))
          }
        </View>

        <View style={styles.operationBoxButton}>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90.3%',
    alignItems: "center",
    borderWidth: 1,
    padding: 5,
    backgroundColor: "#c55",
    justifyContent: 'space-around',
  },
  contentBoxView: {
    backgroundColor: "#ccc",
    flex: 0.3,
    width: '100%',
  },
  boxView: {
    borderWidth: 1,
    height: 100,
  },
  contentBoxButton: {
    backgroundColor: "#ccc",
    borderWidth: 1,
    flex: 0.65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numBoxButton: {
    backgroundColor: "#fff",
    width: "50%",
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  operationBoxButton: {
    backgroundColor: "#fff",
    width: "20%",
  },
});

export default index;
