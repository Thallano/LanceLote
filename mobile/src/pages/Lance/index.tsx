import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, ScrollView, Alert, Picker } from 'react-native';
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
            Alert.alert('Preencha todos campos do serviço');
        } else {
        const response = await api.post('services', {
                user_id,
                service,
                description,
                modality,
                cost              
        }).then(() => {
            Alert.alert('Serviço cadastrado com sucesso!');
            ('/');
            
        }).catch(() => {
            Alert.alert('Erro no cadastro!');
        })
    }
    }
    
    return (
        <>
        <PageHeader 
        title="Lançar Serviço"
        subtitle="Aqui você vai lançar seus serviços"
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

                    <Text style={styles.label}>Qual serviço deseja Lançar?</Text>
                    {/*<TextInput 
                        style={styles.input}
                        value={service}
                        onChangeText={text =>  setService(text)}
                        placeholder="Qual serviço deseja Lançar?"
                        placeholderTextColor="#c1bccc"
                        
                    />*/}
                        <View style={styles.pickerContainer}>
                        <Picker
                        selectedValue={service}
                        style={styles.pickerStyle}
                        onValueChange={(itemValue, itemIndex) =>
                            setService(itemValue)
                        }>
                            <Picker.Item label="Serviços Gerais" value="Serviços Gerais" />
                            <Picker.Item label="Artista" value="Artista" />
                            <Picker.Item label="Artista Plástico" value="Artista Plástico" />
                            <Picker.Item label="Bombeiro" value="Bombeiro" />
                            <Picker.Item label="Babá" value="Babá" />
                            <Picker.Item label="Barman" value="Barman" />
                            <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
                            <Picker.Item label="Designer" value="Designer" />
                            <Picker.Item label="Designer-Gráfico" value="Designer-Gráfico" />
                            <Picker.Item label="Encanador" value="Encanador" />
                            <Picker.Item label="Eletricista" value="Eletricista" />
                            <Picker.Item label="Funileiro" value="Funileiro" />
                            <Picker.Item label="Garçom" value="Garçom" />
                            <Picker.Item label="Padeiro" value="Padeiro" />
                            <Picker.Item label="Pedreiro" value="Pedreiro" />
                            <Picker.Item label="Pintor" value="Pintor" />
                            <Picker.Item label="Servente de Pedreiro" value="Servente de Pedreiro" />
                            <Picker.Item label="Carpinteiro" value="Carpinteiro" />
                            <Picker.Item label="Marceneiro" value="Marceneiro" />
                            <Picker.Item label="Serviço não Listado" value="Serviço não Listado" />
                        </Picker>
                        </View>
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

                            <View style={styles.pickerContainerModality}>
                            <Picker
                            selectedValue={modality}
                            style={styles.pickerStyleModality}
                            onValueChange={(itemValue, itemIndex) =>
                                setModality(itemValue)
                            }>
                                <Picker.Item label="Preço/Hora" value="Preço" />
                                <Picker.Item label="Dária" value="Dária" />
                                <Picker.Item label="Por Serviço" value="Serviço Plástico" />
                                <Picker.Item label="A Combinar" value="A Combinar" />
                            </Picker>
                            </View>
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