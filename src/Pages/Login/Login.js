import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, View, Animated, Keyboard } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import estilo from './estilo';


const Login = () => {
    const [offset] = useState(new Animated.ValueXY({x: 0, y: 95}));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] =  useState(new Animated.ValueXY({x: 300, y: 300}));

    useEffect(()=> {
        Animated.parallel ([
            Animated.spring(offset.y,{
                toValue: 0,
                speed: 3,
                bounciness: 30,
                useNativeDriver: true
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration:800,
                useNativeDriver: true

            })
        ]).start()
        
    }, []);
    return (
        <KeyboardAvoidingView style={estilo.bg}>
            <View style={estilo.contlogo}>
                <Animated.Image
                style={{
                    width: logo.x,
                    height: logo.y,
                }}
                source={require('../../../assets/Images/logo.png')}
                />
            </View>
            <Animated.View style={[
                estilo.cont,
                {
                    opacity: opacity,
                    transform: [
                        { translateY: offset.y}
                    ]
                }
            ]}

            >

                <TextInput
                style={estilo.input}
                placeholder='E-mail'
                autoCorrect={false}
                onChangeText={() => {}}
                />

                 <TextInput
                style={estilo.input}
                placeholder='Senha'
                autoCorrect={false}
                onChangeText={() => {}}
                />
                <TouchableOpacity style={estilo.logar}>
                    <Text style={estilo.txtlogar}>Acessar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={estilo.register}>
                    <Text style={estilo.txtregister}> Criar conta</Text>
                </TouchableOpacity>
            </Animated.View>
        </KeyboardAvoidingView>
    )
}

export default Login;