import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Initial from '../screens/Initial';
import Input from '../screens/Input';
import Output from '../screens/Output';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Output" component={Output} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}