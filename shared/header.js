import React from 'react';
import { StyleSheet,Text,View,Image,ImageBackground} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({navigation,title}) {


    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
            <MaterialIcons name='menu' onPress={openMenu} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image source={require('../assets/heart_logo.png')} style={styles.headerImage}/>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}

const styles= StyleSheet.create({
    header:{
        width:330,
        height:'100%',
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent: 'center',
        //backgroundColor : 'red'
    },
    headerText:{
        fontWeight : 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        left: 30
    },
    icon :{
        position : 'absolute',
        left: 16
    },
    headerImage :{
        //margin
        height: 26,
        width :26,
        left: 26,
        marginHorizontal:10
    },
    headerTitle :{
        flexDirection:'row'
    }
})