import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 400

const estilo = StyleSheet.create({

    img: {
        width: 300,
        height: 300,
        marginTop: 10,
        borderRadius: 10
        
    },
    card:{
        width: largura * 0.9,
        minHeight: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        marginTop: 30
        
    },
    user: {
        width: 50,
        height: 50
        
    },
    carduser: {
        margin: 5
    },
    bg: {
        backgroundColor: '#e6ccff',
        
    }
   
   
    





})


export default estilo;



