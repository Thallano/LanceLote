import React, { useState } from 'react';
import {View, Text, ImageBackground, TextInput, ScrollView } from 'react-native';
import { RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Feather} from '@expo/vector-icons';


import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Lance (){

    const [service, setService] = useState('');
    const [description, setDescription] = useState('');
    const [modality, setModality] = useState('');
    const [cost, setCost] = useState('');
    
    return (
        <>
        <PageHeader title="Lançar"></PageHeader>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.container}>
            <FontAwesome style={styles.gearIcon} name="gears" size={55} color="#FF514B" />
            <View style={styles.searchForm}>
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
            <TouchableOpacity style={styles.buttonLance}>
                <Text style={styles.buttontext}>Quero Lançar um Serviço</Text>
                <Feather name="arrow-up-right" size={24} color="#FF514B" />
            </TouchableOpacity>
            
        </View>
        </ScrollView>
        </>
    )
}

export default Lance;