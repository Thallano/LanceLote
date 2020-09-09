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
    const [service, setService] = useState("Serviços Gerais");
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState('');
    const [cost, setCost] = useState('');
    const [rate, setRate] = useState(0);
    const [loted, setLoted] = useState(0);
    const [ratetotal, setRatetotal] = useState(0);
    
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
                cost,
                rate,
                loted,
                ratetotal             
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
                            <Picker.Item label="Açougueiro" value="Açougueiro" />
                            <Picker.Item label="Atendente" value="Atendente" />
                            <Picker.Item label="Artista" value="Artista" />
                            <Picker.Item label="Artista Plástico" value="Artista Plástico" />
                            <Picker.Item label="Auxiliar de Pedreiro" value="Auxiliar de Pedreiro" />
                            <Picker.Item label="Auxiliar Administrativo" value="Auxiliar Administrativo" />
                            <Picker.Item label="Assistência Técnica" value="Assistência Técnica" />
                            <Picker.Item label="Bombeiro" value="Bombeiro" />
                            <Picker.Item label="Babá" value="Babá" />
                            <Picker.Item label="Barman" value="Barman" />
                            <Picker.Item label="Borracheiro" value="Borracheiro" />
                            <Picker.Item label="Cabelereira" value="Cabelereira" />
                            <Picker.Item label="Carpinteiro" value="Carpinteiro" />
                            <Picker.Item label="Caseiro" value="Caseiro" />
                            <Picker.Item label="Cuidador" value="Cuidador" />
                            <Picker.Item label="Chapeiro" value="Chapeiro" />
                            <Picker.Item label="Costureira" value="Costureira" />
                            <Picker.Item label="Desenvolvedor" value="Desenvolvedor" />
                            <Picker.Item label="Designer" value="Designer" />
                            <Picker.Item label="Designer-Gráfico" value="Designer-Gráfico" />
                            <Picker.Item label="Diárista" value="Diárista" />
                            <Picker.Item label="Esteticista" value="Esteticista" />
                            <Picker.Item label="Encanador" value="Encanador" />
                            <Picker.Item label="Entregador" value="Entregador" />
                            <Picker.Item label="Empregada" value="Empregada" />
                            <Picker.Item label="Eletricista" value="Eletricista" />
                            <Picker.Item label="Frete" value="Frete" />
                            <Picker.Item label="Funileiro" value="Funileiro" />
                            <Picker.Item label="Garçom" value="Garçom" />
                            <Picker.Item label="Gesseiro" value="Gesseiro" />
                            <Picker.Item label="Jardineiro" value="Jardineiro" />
                            <Picker.Item label="Padeiro" value="Padeiro" />
                            <Picker.Item label="Pedreiro" value="Pedreiro" />
                            <Picker.Item label="Pintor" value="Pintor" />
                            <Picker.Item label="Servente de Pedreiro" value="Servente de Pedreiro" />
                            <Picker.Item label="Segurança" value="Segurança" />
                            <Picker.Item label="Soldador" value="Soldador" />
                            <Picker.Item label="Suporte Técnico" value="Suporte Técnico" />
                            <Picker.Item label="Mêcanico Automobilístico" value="Mêcanico Automobilístico" />
                            <Picker.Item label="Maquiador" value="Maquiador" />
                            <Picker.Item label="Marceneiro" value="Marceneiro" />
                            <Picker.Item label="Metalúrgico" value="Metalúrgico" />
                            <Picker.Item label="Mestre de Obra" value="Mestre de Obra" />
                            <Picker.Item label="Motoboy" value="Motoboy" />
                            <Picker.Item label="Operador de Caixa" value="Operador de Caixa" />
                            <Picker.Item label="Operador de Empilhadeira" value="Operador de Empilhadeira" />
                            <Picker.Item label="Operador de Telemarketing" value="Operador de Telemarketing" />
                            <Picker.Item label="Reboque/Guincho" value="Reboque/Guincho" />
                            <Picker.Item label="Recepcionista" value="Recepcionista" />
                            <Picker.Item label="Técnico em ArCondicionado" value="Técnico em ArCondicionado" />
                            <Picker.Item label="Técnico em Informática" value="Técnico em Informática" />
                            <Picker.Item label="Vendedor" value="Vendedor" />
                            <Picker.Item label="Vigia" value="Vigia" />
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
                                <Picker.Item label="Preço/Hora" value="Preço/Hora" />
                                <Picker.Item label="Diária" value="Diária" />
                                <Picker.Item label="Por Serviço" value="Por Serviço" />
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