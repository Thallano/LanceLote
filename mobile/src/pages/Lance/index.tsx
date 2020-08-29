import React, { useState, useEffect } from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';


import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Lance (){
    
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState('');
    const [cost, setCost] = useState('');
    /*const [inputFocus, setInputFocus ] = useState<string>('');

    useEffect (( ) =>{
        setInputFocus(styles.input)
    },[]) 
    
    function handleInFocus () {
        setInputFocus(styles.inputFocused)
    }
    function handleOffFocus () {
        setInputFocus(styles.input)
    }*/

    return (
        <>
        <PageHeader title="Lançar"></PageHeader>
        
        <View style={styles.container}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
            <FontAwesome style={styles.gearIcon} name="gears" size={55} color="#4b97ff" />
            <View style={styles.searchForm}>
                    <Text style={styles.label}>Serviço</Text>
                    <TextInput 
                        style={styles.input}
                        value={service}
                        onChangeText={text =>  setService(text)}
                        placeholder="Qual serviço deseja Lançar?"
                        placeholderTextColor="#c1bccc"
                        
                    />
                    <Text style={styles.label}>Descrição</Text>
                    <TextInput 
                        style={styles.inputDescription}
                        value={description}
                        onChangeText={text =>  setDescription(text)}
                        placeholder="Conte-nos um pouco sobre seu serviço"
                        placeholderTextColor="#c1bccc"
                    />
                
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Preço/Hora ou Diária?</Text>
                        <TextInput 
                            style={styles.input}
                            value={modality}
                            onChangeText={text =>  setModality(text)}
                            placeholder="Tipo de trabalho?"
                            placeholderTextColor="#c1bccc"
                         
                        />
                        </View>
                    
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Valor do seu Serviço</Text>
                        <TextInput 
                            style={styles.input}
                            value={cost}
                            onChangeText={text =>  setCost(text)}
                            placeholder="Qual o Valor?"
                            placeholderTextColor="#c1bccc"
                           
                        />
                        </View> 
                    </View>
            </View>
            <TouchableOpacity style={styles.buttonLance}>
                <Text style={styles.buttontext}>Quero Lançar um Serviço</Text>
                <MaterialCommunityIcons name="arrow-top-right-thick" size={26} color="#4b97ff" />
            </TouchableOpacity>
         </ScrollView> 
        </View>
        
        </>
    )
}

export default Lance;