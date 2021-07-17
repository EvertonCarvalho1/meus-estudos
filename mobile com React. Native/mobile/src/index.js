import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList , Text, StyleSheet, StatusBar} from 'react-native';

import api from './services/api';

export default function App () {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('projects').then(response => {
            console.log(response.data);
            setProjects(response.data);
            
        })


    }, []);



    return (
    <>
    
        <StatusBar barStyle='dark-content' backgroundColor='#7159c1'/>

        <SafeAreaView style={styles.container}>

            <FlatList 
            
            data={projects}
            keyExtractor={project => projects.id}
            renderItem={( {item: project}) => (

                <Text style={styles.project} >{project.title}</Text>

            )}
            />

        </SafeAreaView>



        {/* 
        <View style={styles.container}> 

            {projects.map(project => (
                <Text style={styles.project} key={project.id}>{project.title}</Text>
            ))}

        </View> 
        
        */}

    </>
)
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#7159c1',
        flex: 1,
       
    },

    project: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 5
        
    }
});

