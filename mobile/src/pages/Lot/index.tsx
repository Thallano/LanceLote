import React, { useState } from 'react';
import {View, Text, ImageBackground, TextInput } from 'react-native';
import { RectButton, ScrollView, BorderlessButton, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather } from '@expo/vector-icons';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import LancerItem from '../../components/LancerItem';

function Lot (){

    const [isFilterVisible, setIsFilterVisible] = useState(false);
    

    const [subject, setSubject] = useState('');
   
    function handleToggleFiltersVisible( ) {
        setIsFilterVisible(!isFilterVisible);
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
                    value={subject}
                    onChangeText={text =>  setSubject(text)}
                    placeholder="Qual serviço?"
                    placeholderTextColor="#c1bccc"
                />
            
                <TouchableOpacity style={styles.button}>
                    <FontAwesome name="search" size={24} color="#14181C" />
                    {/*<Text style ={styles.buttontext}>Lotar</Text>*/}
                </TouchableOpacity>
            </View>
        )}
        </PageHeader>
        <View style={styles.bottomLancersContainer}>
            <ScrollView
                style={styles.containerItens}
                showsHorizontalScrollIndicator= {false}
                horizontal={true}
            >
            <LancerItem />
            <LancerItem />
            <LancerItem />
            <LancerItem />
            <LancerItem />
            </ScrollView>
            
         
        </View>
        </>
    )
}

export default Lot;