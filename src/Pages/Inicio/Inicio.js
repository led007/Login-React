import React from 'react';
import {View, Text} from 'react-native'
import { Feed } from '../Feed/';

import Icon from 'react-native-vector-icons/Feather';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Usuarios} from '../Usuarios/';
import { Notificacoes } from '../Notificacoes';




const NavegacaoTabs = createBottomTabNavigator();

const Inicio = ({route, navigation}) => {
    return (
        <NavegacaoTabs.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;
        
              switch (route.name) {
                case 'Feed':
                  iconName = 'home';
                  break;
                case 'Usuarios':
                  iconName = 'users';
                  break;
                case 'Notificacoes':
                  iconName = 'bell';
                  break;
                default:
                  iconName = 'circle';
                  break;
              }
        
              return <Icon name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#cc00cc',
            inactiveTintColor: '#777',
            showLabel: false,
          }}  
        
        >
            <NavegacaoTabs.Screen name="Feed" component={Feed} navigation={navigation} options={{ title: 'Página de feed' }} />
            <NavegacaoTabs.Screen name="Usuarios" component={Usuarios} navigation={navigation} options={{ title: 'Usuarios' }} />
            <NavegacaoTabs.Screen name="Notificacoes" component={Notificacoes} navigation={navigation} options={{ title: 'Notificacoes' }} />
        </NavegacaoTabs.Navigator>
    )
}

export default Inicio