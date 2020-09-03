import React, { useState } from 'react';
import {View, Text, TextInput, Picker} from 'react-native';
import {  ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather } from '@expo/vector-icons';
import LancerItem, { Lancer } from '../../components/LancerItem';

import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';

import styles from './styles';


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
        console.log(service)
        setIsFilterVisible(false);
        setIsCaseVisible(false);
        setLancers(response.data);
    }

    return (
        <>
        <PageHeader 
            title="Lotar Serviço"
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
                    <Picker.Item label="Serviços Gerais" value="Serviços Gerais" />
                    <Picker.Item label="Carpinteiro" value="Carpinteiro" />
                    <Picker.Item label="Marceneiro" value="Marceneiro" />
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