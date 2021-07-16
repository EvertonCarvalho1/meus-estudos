import React from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';

export default function App () {
    return (
    <>
    
        <StatusBar barStyle='dark-content' backgroundColor='#7159c1'/>

        <View style={styles.container}> 

            <Text style={styles.title}>Hello World</Text>
        
        </View>

    </>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#7159c1',
        flex: 1,
        justifyContent: 'center'
    },

    title: {
        color: '#FFF',
        fontSize: 32,
        alignSelf: 'center',
        fontWeight: 'bold',
        
    }
});

