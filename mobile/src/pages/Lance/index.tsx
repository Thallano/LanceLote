import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, MaterialCommunityIcons} from '@expo/vector-icons';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';

import styles from './styles';


function Lance (){
    const [ loginIdPass, setLoginIdPass ] = useState([]);

    const [user_id, setUser] = useState('');
    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState('');
    const [cost, setCost] = useState('');
    
    function loadLogin ( ){
        AsyncStorage.getItem('login').then(response =>{
            if (response){
                const loginId = JSON.parse(response);
                setLoginIdPass(loginId);
                setUser(loginId);
            }
        });
    }
    
    useEffect (()=> {
        loadLogin();
    },[])

    async function handleServiceSubmit( ){
        if( service == '' || user_id == '' || description == '' || cost == '' || modality == '' ){
            alert('Preencha todos campos do serviço');
        } else {
        const response = await api.post('services', {
                user_id,
                service,
                description,
                modality,
                cost              
        }).then(() => {
            alert('Serviço cadastrado com sucesso!');
            ('/');
            
        }).catch(() => {
            alert('Erro no cadastro!');
        })
    }
    }
    
    return (
        <>
        <PageHeader 
        title="Lançar"
        subtitle="Aqui você vai lançar seus serviços"
        headerRight={<Text style={styles.label}>Seu ID: {loginIdPass}</Text>}
        ></PageHeader>
        
        <View style={styles.container}>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
            <FontAwesome style={styles.gearIcon} name="gears" size={55} color="#4b97ff" />
            <View style={styles.searchForm}>
                    {/*<Text style={styles.label}>Id do Usuario</Text>
                    <TextInput 
                        style={styles.input}
                        value={user_id}
                        onChangeText={text =>  setUser(text)}
                        placeholder="Confirme para nós o seu ID"
                        placeholderTextColor="#c1bccc" 
                   />*/}

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
                        multiline
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
            <TouchableOpacity style={styles.buttonLance} onPress={handleServiceSubmit}>
                <Text style={styles.buttontext}>Quero Lançar um Serviço</Text>
                <MaterialCommunityIcons name="arrow-top-right-thick" size={26} color="#4b97ff" />
            </TouchableOpacity>
         </ScrollView> 
        </View>
        
        </>
    )
}

export default Lance;