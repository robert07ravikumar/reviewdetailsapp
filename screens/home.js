import React, {useState} from 'react';
import {StyleSheet , View , Text , Button ,TouchableOpacity ,Modal} from 'react-native' ;
import { globalStyles } from '../styles/global'
import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons'

export default function Home({navigation}){
    const [modalOpen,setModalOpen] = useState(false); 
    const [reviews,setReviews] = useState([
        {title : ' ananconda',rating:5,body:'snake',key: '1'},
        {title : ' Jurassic park',rating:3,body:'dinosaur',key: '2'},
        {title : ' piranha',rating:4,body:'fish',key: '3'}
    ])

    return (
        <View style={globalStyles.container}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={StyleSheet.modalContent}>
                    <MaterialIcons name='close' size={24} onPress={() => setModalOpen(false)}
                        style={{...styles.modalToggle,...styles.modalClose}}/>
                    <Text>Hello from the Modal</Text>
                    </View>
            </Modal>
            <MaterialIcons name='add' size={24} onPress={() => setModalOpen(true)}
                style={styles.modalToggle}/>
            <FlatList
                data = {reviews}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails',item)}>
                        <Card>
                            <Text style={globalStyles.titletext}>{item.title}</Text>
                            </Card>
                    </TouchableOpacity>
                )}
                />
        </View>
        
    )
}

const styles= StyleSheet.create({
    modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf:'center'
    },
    modalClose:{
        marginTop:20,
        marginBottom:0
    }
})