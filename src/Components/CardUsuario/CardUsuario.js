import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import estilo from './estilo';
import { GeneralStarExample } from '../../Components/Rating'
    


const CardUsuario = ({navigation, dadosUsuario}) => {
    return (

        <View style={estilo.card}>
            <View>
                <Image
                    style={estilo.imagem}
                    source={{uri: dadosUsuario.picture}}
                />  
            </View>
            <View style={estilo.info}>
            <Text style={estilo.nome} >{dadosUsuario.title + ' ' + dadosUsuario.firstName + ' ' + dadosUsuario.lastName}</Text>
             <Text>{dadosUsuario.email}</Text>
             
            </View>
            <GeneralStarExample/>
        </View>
    )
}


export default CardUsuario