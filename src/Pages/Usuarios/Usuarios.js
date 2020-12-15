import React, { useEffect, useState } from 'react';
import {View, Text,ScrollView, FlatList, TouchableOpacity} from 'react-native'
import estilo from './estilo';
import getUsuarios from '../../api/usuarios'
import { CardUsuario } from '../../Components/CardUsuario';

const Usuarios = ({navigation}) => {

    const [usuarios, setUsuarios] = useState('');

    useEffect(() => {
        getUsuarios(setUsuarios);
        navigation.setOptions({ title: 'Usuários cadastrados' })
    },[])

    return (
        <ScrollView style={estilo.scroll}>
            <View style={estilo.container}>
                <FlatList 
                    data={usuarios}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={({item}) => {
                                let dadosUsuario = {}
                                dadosUsuario.nomeUsuario = item.firstName + ' ' + item.lastName
                                dadosUsuario.emailUsuario = item.email 
                                dadosUsuario.fotoUsuario = item.picture 
                                dadosUsuario.idUsuario = item.id
                        return (

                            <TouchableOpacity 
                                onPress={() => navigation.navigate('Usuario', {dadosUsuario})}
                            >
                                <CardUsuario dadosUsuario={item} />
                            </TouchableOpacity>

                        )}
                    }


                    
                    />

            </View>
        </ScrollView>
    )
}

export default Usuarios