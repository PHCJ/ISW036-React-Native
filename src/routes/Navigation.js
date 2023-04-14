import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Aulas from '../pages/Aulas';
import Atividade2 from '../components/Aula02/';
import Atividade03 from '../components/Atividade03/';
import Atividade04 from '../components/Atividade04/';
import Atividade05 from '../components/Atividade05/';


const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculadora" component={Calculator} />
      <Stack.Screen name="Atividades" component={Aulas} />
      <Stack.Screen name="Atividade 2" component={Atividade2} />
      <Stack.Screen name="Atividade 3" component={Atividade03} />
      <Stack.Screen name="Atividade 4" component={Atividade04} />
      <Stack.Screen name="Atividade 5" component={Atividade05} />


    </Stack.Navigator>
  );
};

export default Navigation;