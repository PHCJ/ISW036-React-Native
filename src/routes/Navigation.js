import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';
import Aulas from '../pages/Aulas';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculadora" component={Calculator} />
      <Stack.Screen name="Aulas" component={Aulas} />
    </Stack.Navigator>
  );
};

export default Navigation;