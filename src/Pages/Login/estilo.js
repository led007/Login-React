import React from 'react';
import { Dimensions, StyleSheet} from 'react-native';

const largura = 295



const estilo = StyleSheet.create({
    bg: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'black'
    },
    contlogo: {
        flex:1,
        justifyContent: 'center',
    },
    cont: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50
    },
    input: {
        backgroundColor: "#fff",
        width: '90%',
        marginBottom: 15,
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10
    },
    logar:{
        backgroundColor: '#cc00cc',
        width: largura,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7
    },
    txtlogar: {
        color: '#fff',
        fontSize: 18
    },
    txtregister: {
        color: '#fff'
    },
    register : {
        marginTop: 10,
        
    },
    textoMensagem: {
        color: '#f3e6ff',
        padding: 7,
        fontWeight: 'bold'
    }

    
})











export default estilo;