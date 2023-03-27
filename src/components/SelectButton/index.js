import React, { useState } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import Form from '../Form/'

const Screen1 = () => {
  return (
    <View >
      <Form />
    </View>
  );
};

const Screen2 = () => {
  return (
    <View style={styles.menuButton}>
     <Text style={styles.msg}>Em construção</Text>
    </View>
  );
};

const TwoScreensComponent = () => {
  const [showScreen1, setShowScreen1] = useState(true);

  const onPressButton1 = () => {
    setShowScreen1(true);
  };

  const onPressButton2 = () => {
    setShowScreen1(false);
  };

  return (
    <View >
      <View style={styles.menuButton}>
        <TouchableOpacity onPress={onPressButton1} style={styles.btnStyle}>
          <Text style={styles.btnText}>IMC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressButton2} style={styles.btnStyle}>
          <Text style={styles.btnText}>Idade</Text>
        </TouchableOpacity>
      </View>
      {showScreen1 ? <Screen1 /> : <Screen2 />}
    </View>
  );
};

export default TwoScreensComponent;
