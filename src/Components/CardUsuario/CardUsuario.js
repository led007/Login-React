import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import estilo from './estilo';



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
                <Text>{dadosUsuario.dateOfBith}</Text>
                <Text>{dadosUsuario.email}</Text>
                <Text>{dadosUsuario.phone}</Text>
            </View>
        </View>
    )
}


export default CardUsuario