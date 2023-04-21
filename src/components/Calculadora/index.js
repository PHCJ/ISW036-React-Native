import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Botao from '../Botao/index'
import Ionicons from '@expo/vector-icons/Ionicons';


const index = () => {
  const operationButtons = ["+", "-", "*", "/", "="];
  const numberButtons = Array.from({ length: 10 }, (_, i) =>
    String.fromCharCode(i + 48)
  );

  const [icalc, setIcalc] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.contentBoxView}>
        <Text style={styles.boxView}></Text>
        <Text style={styles.boxView}>{icalc}</Text>
      </View>
      <View style={styles.contentBoxButton}>

        <View style={styles.numBoxButton}>
          <Botao element={"C"}></Botao>
          <Botao key={","} element={","} onPress={() => { setIcalc(',') }}></Botao>
          {numberButtons.map((element) =>
            (<Botao key={element} element={element} onPress={() => { setIcalc(numberButtons[element]) }} />))
          }
          <Botao element={"X²"} />
          <Botao element={"X³"} />
          <TouchableOpacity style={{alignItems:'center',justifyContent:'center', margin:8}}>
          <Ionicons name="backspace-outline"
            size={50} color="black"
          />
          </TouchableOpacity>
        </View>

        <View style={styles.operationBoxButton}>
          {operationButtons.map((element) => (
            <Botao key={element} element={element} onPress={() => {
              setIcalc(element)
            }} />
          ))}
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
    height: '50%',
    textAlign: 'right',
    textAlignVertical: 'bottom',
    fontSize: 44,
    paddingRight: 20,
    paddingBottom: 20,
  },
  contentBoxButton: {
    backgroundColor: "#ccc",
    borderWidth: 1,
    flex: 0.65,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  numBoxButton: {
    width: "57.5%",
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
  },
  operationBoxButton: {
    width: "20%",
  },
});

export default index;
