import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import ResultadoIMC from "../ResultadoImc/";
import styles from './style'

export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weight, serWeigth] = useState(null);
  const [messageImc, setMessageImc] = useState("Preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc((weight / (heigth * heigth)).toFixed(2));
  }

  function validationImc() {
    if (weight != null && heigth != null) {
      imcCalculator();
      setHeigth(null);
      serWeigth(null);
      setMessageImc("Seu imc é: ");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("preencha o peso e altura");
  }
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          onChangeText={setHeigth}
          value={heigth}
          placeholder="Insira a altura: Ex. 1.85"
          keyboardType="numeric"
          style={styles.imput}
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          onChangeText={serWeigth}
          value={weight}
          placeholder="Insira o Peso: Ex. 80.49"
          keyboardType="numeric"
          style={styles.imput}
        />
        <TouchableOpacity 
        onPress={()=>{validationImc()}}
        style={styles.ButtonCalculator}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultadoIMC messagemResultado={messageImc} resultadoImc={imc} />
    </View>
  );
}
