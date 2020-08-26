import React, { useState } from 'react';
import {View, Text, ImageBackground, TextInput } from 'react-native';
import { RectButton, ScrollView, BorderlessButton } from 'react-native-gesture-handler';
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
            <BorderlessButton onPress={handleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#FFF" />
            </BorderlessButton>
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
            
                <View style={styles.inputGroup}>
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
                    />
                    </View>
                </View>
                <RectButton style={styles.button}>
                    <Text style ={styles.buttontext}>Lotar</Text>
                </RectButton>
            </View>
        )}
       </PageHeader>
        
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
        
        </>
    )
}

export default Lot;