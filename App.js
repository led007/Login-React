import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/Pages/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Inicio} from './src/Pages/Inicio'



const Navegacao = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    <Navegacao.Navigator 
      initialRouteName="Inicio"
    >
      <Navegacao.Screen
        name="Login" 
        component={Login} 
        options={{
          headerShown: false
        }}
      />
      <Navegacao.Screen
       options={{
        headerTintColor:'#cc00cc'
      }}
       name="Inicio" component={Inicio} />
    </Navegacao.Navigator>
  </NavigationContainer> 
  );
}

