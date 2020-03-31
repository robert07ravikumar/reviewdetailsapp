import React, {useState} from 'react';
import {StyleSheet , View , Text , Button ,TouchableOpacity} from 'react-native' ;
import { globalStyles } from '../styles/global'
import { FlatList } from 'react-native-gesture-handler';


export default function Home({navigation}){

    const [reviews,setReviews] = useState([
        {title : ' ananconda',rating:5,body:'snake',key: '1'},
        {title : ' Jurassic park',rating:3,body:'dinosaur',key: '2'},
        {title : ' piranha',rating:4,body:'fish',key: '3'}
    ])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data = {reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                        <Text style={globalStyles.titletext}>{item.title}</Text>
                    </TouchableOpacity>
                )}
                />
        </View>
        
    )
}