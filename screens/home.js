import React from 'react';
import {StyleSheet , View , Text} from 'react-native' ;


export default function Home(){
    return (
        <View style={styles.container}>
            <Text style={styles.titletext}>Home Screen</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container : {
        padding:24
    },
    titletext:{
        fontFamily:'nunito-bold',
        fontSize: 18
    }
})