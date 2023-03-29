import React from "react";
import { View } from "react-native";
import Aula02 from "../../components/Aula02";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Aula02 max={10} min={0} />
    </View>
  );
}
