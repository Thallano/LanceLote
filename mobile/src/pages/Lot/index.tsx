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
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');

    function handleToggleFiltersVisible( ) {
        setIsFilterVisible(!isFilterVisible);
    }
    return (
        <>
        <PageHeader 
            title="Lotar"
            headerRight={(
            <TouchableOpacity onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#FFF" />
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
            
                {/*<View style={styles.inputGroup}>
                    <View style={styles.inputBlock}>
                    <Text style={styles.label}>Dia da semana</Text>
                    <TextInput 
                        style={styles.input}
                        value={week_day}
                        onChangeText={text =>  setWeekDay(text)}
                        placeholder="Qual o dia?"
                        placeholderTextColor="#c1bccc"
                    />
                    </View>
                
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Horário</Text>
                    <TextInput 
                        style={styles.input}
                        value={time}
                        onChangeText={text =>  setTime(text)}
                        placeholder="Qual o Horário?"
                        placeholderTextColor="#c1bccc"
                    />--------------------
                </View> 
                </View>*/}
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