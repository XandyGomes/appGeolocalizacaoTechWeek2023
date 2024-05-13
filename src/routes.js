import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import Main from './pages/main';
import Login from './pages/login'
import Maps from './pages/maps';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#38A69D" barStyle="light-content" />
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="maps"
          component={Maps}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
