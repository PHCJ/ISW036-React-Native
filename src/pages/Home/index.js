import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native';
import Title from '../../components/Title'
import styles from './styles'

const HomeScreen = ({ navigation }) => {
  return (
    <View >
      <Title titulo="App Paulo"/>
      <TouchableOpacity style={styles.ButtonCalculadora} onPress={() => navigation.navigate('Calculadoras')}>
        <Text style={styles.textButtonCalculator}>Calculadoras</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ButtonAula} onPress={() => navigation.navigate('Atividades')}>
        <Text style={styles.textButtonCalculator}>Atividades</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
