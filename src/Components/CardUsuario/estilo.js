import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 100

const estilo = StyleSheet.create({
    card: {
        width: largura * 0.9,
        minHeight: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        marginTop: 12,
        marginBottom: 20,
        alignItems:"center",
        padding: 20
    },
    imagem: {
        width: largura * 0.4,
        height: largura * 0.4,
        borderRadius: largura * 0.5,
        resizeMode: 'cover',
        marginBottom: 20
    },
    info: {
        width: "100%",
        alignItems: "center"
    },
    nome: {
        fontWeight: "bold",
        textTransform: "capitalize"
    },

})

export default estilo;