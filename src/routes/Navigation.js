import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Calculator from '../pages/Calculator';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Calculatora" component={Calculator} />
    </Stack.Navigator>
  );
};

export default Navigation;