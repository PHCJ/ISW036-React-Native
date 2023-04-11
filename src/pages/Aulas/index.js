import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Atividade 2')}>
        <Text style={styles.textButton}>Atividade 2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Atividade 3')}>
        <Text style={styles.textButton}>Atividade 3</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Atividade 4')}>
        <Text style={styles.textButton}>Atividade 4</Text>
      </TouchableOpacity>
    </View>
  );
}
