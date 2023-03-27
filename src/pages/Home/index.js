import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Title from '../../components/Title'
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <Title titulo="App Paulo"/>
      <TouchableOpacity style={styles.ButtonCalculadora} onPress={() => navigation.navigate('Calculatora')}>
        <Text style={styles.textButtonCalculator}>Calculadora</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
