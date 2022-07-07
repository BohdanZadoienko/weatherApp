import React from "react";
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Loading(){
    return (
        <LinearGradient
            colors={['#004FF9', '#FFF94C']}
            style={styles.container}>
       
            <StatusBar barStyle="light-content"/>
            <Text style={styles.text}>Слава Україні!</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#87CEEB', 
    },
    text:{
       color: '#2c2c2c',
       fontSize: 30, 
    }
})