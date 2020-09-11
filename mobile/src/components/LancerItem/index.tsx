import React, { useState, useEffect } from "react";
import {View, Image, Text, Linking } from 'react-native';

import styles from './styles';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';

import logo from '../../../assets/workerimg.png';

import AsyncStorage from '@react-native-community/async-storage';
import api from "../../services/api";

export interface Lancer {
    id: number;
    email: string;
    description: string;
    cost: number;
    name: string;
    service: string;
    whatsapp: string;
    modality: string;
    user_id: string;
    rate: number;
    idService: string
}

export interface LancerItemProps{
    lancer: Lancer;
    loted: boolean;
}

const LancerItem: React.FC<LancerItemProps> = ({ lancer , loted }) =>  {
    const { navigate } = useNavigation();
    
    const [isLoted, setIsLoted] = useState(loted);

    function handleContactPressed ( ) {
        Linking.openURL(`whatsapp://send?phone=55${lancer.whatsapp}&text=Oi%20te%20encontrei%20no%20LanceLote!%20Gostaria%20de%20saber%20sobre%20mais%20sobre%20seu%20serviço.`)
    }
    
    async function handleLotarServicePressed ( ) {
        const lotes = await AsyncStorage.getItem('lotados');

        let lotesArray = [];
            
        if(lotes){
            lotesArray = JSON.parse(lotes);
        }

        if(isLoted) {
                        
        } else {
            lotesArray.push(lancer);
            
            setIsLoted(true);
            await AsyncStorage.setItem('lotados', JSON.stringify(lotesArray));
        }
    }
   
    async function handleServicePressed ( ){
        
        let idServicePressed = [];

        idServicePressed.push(lancer.idService);
       
        await AsyncStorage.setItem('idService', JSON.stringify(idServicePressed));
        
        navigateToServiceProfile();
    }

    function navigateToServiceProfile(){
        navigate('ProfileServicePage')
    }

    return (
    
    <View style={styles.container}>
        <View style={styles.upContainer}>
            <TouchableOpacity onPress={()=>
            {handleServicePressed();
            }} >
                <View style={styles.profile}>
                    <Image
                    style={styles.avatar}
                    source={logo}
                    />
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{lancer.name}</Text>
                        <Text style={styles.service}>{lancer.service}</Text>
                    </View>
                </View>
                <View style={styles.profileRate}>
                    <FontAwesome name="star" size={12} color="#F4F2DA" />
                </View>
                    <Text style={styles.rateText}>Avaliação: {lancer.rate}</Text>
                <ScrollView
                showsVerticalScrollIndicator={false}    
                >
                    <Text style={styles.description}>{lancer.description}</Text>
                </ScrollView>
            </TouchableOpacity>
        </View>
        <View style={styles.footer}>
            <View style={styles.priceContainer}>
                
                <Text style={styles.modality}>{lancer.modality}</Text>
               
                <Text style={styles.cost}>R$ {lancer.cost}</Text>
            </View>

            <View style={styles.buttonsContainer}>

                <TouchableOpacity onPress={handleLotarServicePressed}
                    style={
                    isLoted
                     ? styles.loted
                     : styles.lot
                    }
                >
                    { isLoted
                        ? <FontAwesome name="handshake-o" size={24} color='#4b97ff' /> 
                        : <FontAwesome name="handshake-o" size={24} color='#474553' /> 
                    }
                </TouchableOpacity>
               
                <TouchableOpacity onPress={handleContactPressed} style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    <FontAwesome name="whatsapp" size={24} style={styles.whatsappIcon} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
   
    )
}

export default LancerItem;