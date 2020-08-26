import React, { useState } from 'react';
import {View, Text, ImageBackground, TextInput } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome} from '@expo/vector-icons';


import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Lance (){

    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [price, setPrice] = useState('');
    
    return (
        <>
        <PageHeader title="Lançar"></PageHeader>
        
        <View style={styles.container}>
            <FontAwesome style={styles.gearIcon} name="gears" size={55} color="#FF514B" />
            <View style={styles.searchForm}>
                    <Text style={styles.label}>Serviço</Text>
                    <TextInput 
                        style={styles.input}
                        value={subject}
                        onChangeText={text =>  setSubject(text)}
                        placeholder="Qual serviço deseja Lançar?"
                        placeholderTextColor="#c1bccc"
                        
                    />
                
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Preço/Hora ou Diária?</Text>
                        <TextInput 
                            style={styles.input}
                            value={week_day}
                            onChangeText={text =>  setWeekDay(text)}
                            placeholder="Tipo de trabalho?"
                            placeholderTextColor="#c1bccc"
                        />
                        </View>
                    
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Valor do seu Serviço</Text>
                        <TextInput 
                            style={styles.input}
                            value={price}
                            onChangeText={text =>  setPrice(text)}
                            placeholder="Qual o Valor?"
                            placeholderTextColor="#c1bccc"
                        />
                        </View> 
                    </View>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttontext}>Quero Lançar um Serviço</Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

export default Lance;