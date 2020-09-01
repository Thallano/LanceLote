import React, { useState, useEffect } from 'react';
import {View, Text, TextInput } from 'react-native';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather } from '@expo/vector-icons';

import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import LancerItem, { Lancer } from '../../components/LancerItem';

import api from '../../services/api';

function Lot (){
    const [lotados, setLotados] = useState<number[]>([]);

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    const [isCaseVisible, setIsCaseVisible] = useState(true);

    const [lancers, setLancers] = useState([]);
    const [service, setService] = useState('');
    
    function loadLotados(){
        AsyncStorage.getItem('lotados').then(response => {
            if (response){
                const lotedLancers = JSON.parse(response);
                setLotados(lotedLancers);
            }
        });
    }
    
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
        
        setIsFilterVisible(false);
        setIsCaseVisible(false);
        setLancers(response.data);
    }

    return (
        <>
        <PageHeader 
            title="Lotar"
            headerRight={(
            <TouchableOpacity onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#F4F2DA" />
            </TouchableOpacity>
        )}
    >
       { isFilterVisible && ( 
            <View style={styles.searchForm}>
                <Text style={styles.label}>Serviço</Text>
                <TextInput 
                    style={styles.input}
                    value={service}
                    onChangeText={text =>  setService(text)}
                    placeholder="Qual serviço deseja lotar?"
                    placeholderTextColor="#c1bccc"
                />
            
                <TouchableOpacity style={styles.button} onPress={handleFiltersSubmit}>
                    <FontAwesome name="search" size={24} color="#14181C" />
                    {/*<Text style ={styles.buttontext}>Lotar</Text>*/}
                </TouchableOpacity>
            </View>
        )}
        </PageHeader>
        <View style={styles.bottomLancersContainer}>
            
             { isCaseVisible &&
                <View style={styles.lotarLoading}>
                <FontAwesome style={styles.caseIcon} name="briefcase" size={55} color="#474553" />
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
                    
                    loted={lotados.includes(lancer.id)}
                    
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