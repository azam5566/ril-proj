import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function AppStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        headerMode='screen'
      >
        <Stack.Screen name='FirstScreen' component={FirstScreen} />
        <Stack.Screen name='SecondScreen' component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
