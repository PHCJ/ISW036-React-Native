import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

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
      <View style={styles.contentBoxButton}><Text>letras</Text></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'90.3%',
    alignItems: "center",
    borderWidth:1,
    padding:5,
    backgroundColor:"#c55",
    justifyContent:'space-around',
  },
  contentBoxView:{
    backgroundColor:"#ccc",
    flex:0.3,
    width:'100%',
  },
  boxView: {
    borderWidth: 1,
    height:100,
  },
  contentBoxButton:{
    backgroundColor:"#ccc",
    borderWidth: 1,
    flex:0.65,
    width:'100%'
  },
});

export default index;
