import React, { useEffect, useState } from 'react';
import {View, Text,ScrollView, FlatList, TouchableOpacity, Image} from 'react-native'
import estilo from './estilo';
import getNotificacoes from '../../api/notificacoes'

const Notificacoes = ({navigation}) => {
    const [not, setnot] = useState('');
    

    useEffect(() => {
        getNotificacoes(setnot);
       
    },[])
    console.log(not)

    return (
        <ScrollView style={estilo.bg}>
         <FlatList 
                    data={not}
                    keyExtractor={(item, index) => index.toString() }
                    renderItem={({item}) => {
                               
                        return (
                            <View style={estilo.card} >
                                <View style={estilo.not} >
                                <Image style={estilo.img} 
                                source={{uri: item.owner.picture}}
                                />
                            <Text style={estilo.com}>{item.message}</Text>
                                </View>
                               
                            </View>

                        )}
                    }


                    
                    />
   
        </ScrollView>
    )
}

export default Notificacoes

