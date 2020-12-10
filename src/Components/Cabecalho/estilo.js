import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 400

const estilo = StyleSheet.create({
    cabecalho: {
        flexDirection: 'row',
        width: largura * 0.9,
        marginTop: 10
    },

    nome: {
        fontWeight: "bold",
    },
    imagem: {
        width: 50,
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 30,
        
    }

})

export default estilo;