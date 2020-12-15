import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import estilo from '../Feed/estilo';
import getPostagens from '../../api/feed'
import { Cabecalho } from '../../Components/Cabecalho';




const dados = [1,2,3,4,5];

const Feed = ({navigation}) => {
    
    const [posts, setPosts] = useState('');
    useEffect(() => {
        getPostagens(setPosts);
    },[])



    return (
        <ScrollView style={estilo.bg}>
        <View >
            <FlatList
            
                horizontal={true}
                data={posts}
                keyExtractor={(item, index) => index.toString() }
                renderItem={({item}) => (
                    <View style={estilo.card} >
                          <Cabecalho 
                                nomeUsuario={item.owner.firstName + ' ' + item.owner.lastName}
                                emailUsuario={item.owner.email}
                                fotoUsuario={item.owner.picture}
                                idUsuario={item.owner.id}
                                navigation={navigation}
                            />
                        <Image style={estilo.img}
                        source={{uri:item.image}}/>
                    </View> 
                )}    
            />
        </View>
    </ScrollView>
    )
}

    
export default Feed