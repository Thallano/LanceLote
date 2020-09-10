import React, { useState, useEffect } from 'react';
import { View, Text, Picker } from 'react-native';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather } from '@expo/vector-icons';
import LancerItem, { Lancer } from '../../components/LancerItem';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';

import styles from './styles';


import api from '../../services/api';

function Lot (){
    
    const [loted, setLoted] = useState<string[]>([]);

    const [loginIdPass, setLoginIdPass] = useState([]);
    
    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isCaseVisible, setIsCaseVisible] = useState(true);

    const [lancers, setLancers] = useState([]);
    const [service, setService] = useState<string>("Serviços Gerais");
    
    useEffect(()=>{
        AsyncStorage.getItem('lotados').then(response => {
            if (response){
                const lotedServices = JSON.parse(response);
                const lotedServicesId = lotedServices.map((lancer: Lancer) => {
                    return lancer.idService;
                })
                setLoted(lotedServicesId);
            }
        });
    },[]);

    function loadLogin ( ){
        AsyncStorage.getItem('login').then(response =>{
            if (response){
                const loginId = JSON.parse(response);
                setLoginIdPass(loginId);
            }
        });
    }
    
    useEffect (()=> {
        loadLogin();
    },[]);
    
        
    function handleToggleFiltersVisible( ) {
        setIsFilterVisible(!isFilterVisible);
    }
    function handleBagVisible( ) {
        setIsFilterVisible(!isFilterVisible);
    }

    async function handleFiltersSubmit( ){
        const response = await api.get('services', {
            params:{
               service
            }
        })
        console.log(service)
        setIsFilterVisible(false);
        setIsCaseVisible(false);
        setLancers(response.data);
        console.log(lancers)
    }

    return (
        <>
        <PageHeader 
            title="Lotar Serviço"
            subtitle="filtrar serviços que você precisa"
            headerRight={(
            <TouchableOpacity onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#F4F2DA" />
            </TouchableOpacity>
        )}
    >
       { isFilterVisible && ( 
            <View style={styles.searchForm}>
                {/*<Text style={styles.label}>Serviço</Text>*/}
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
                <TouchableOpacity style={styles.button} onPress={handleFiltersSubmit}>
                    <FontAwesome name="search" size={24} color="#14181C" />
                </TouchableOpacity>
            </View>
        )}
        </PageHeader>
        <View style={styles.bottomLancersContainer}>
            
             { isCaseVisible &&
                <View style={styles.lotarLoading}>
                <FontAwesome style={styles.caseIcon} name="briefcase" size={45} color="#474553" />
                <Text style={styles.caseText}>Lote um Serviço para aparecer aqui</Text>
                </View>
            }

            <ScrollView
                style={styles.containerItens}
                showsHorizontalScrollIndicator= {false}
                horizontal={true}
            >
            { lancers.map((lancer: Lancer) => {
                return (
                    
                    <LancerItem 
                    key={lancer.id}
                    lancer={lancer}
                    loted={loted.includes(lancer.idService)}
                    
                    /> 
                    
                )
            }
            )}
            </ScrollView>

         
        </View>
        </>
    )
}

export default Lot;