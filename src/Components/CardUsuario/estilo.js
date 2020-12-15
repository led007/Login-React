import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 10
const larguracard = 350

const estilo = StyleSheet.create({
    card: {
        width: larguracard,
        Height: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        marginTop: 12,
        marginBottom: 20,
        padding: 10,
        margin: 20,
        
    },
    imagem: {
        width: largura * 0.2,
        height: largura * 0.2,
        borderRadius: 5,
        
        
    },
    info: {
        width: "100%",
        marginTop: 15
    },
    nome: {
        fontWeight: "bold",
        textTransform: "capitalize",
        color: '#cc00cc'
    },
    gg: {
        backgroundColor: 'red',
        width: 130,
        height: 30
    }

})

export default estilo;