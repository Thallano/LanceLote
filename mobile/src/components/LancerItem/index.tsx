import React, { useState } from "react";
import {View, Image, Text, Linking, AsyncStorage } from 'react-native';
import logo from '../../../assets/logo.png';
import styles from './styles';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 

export interface Lancer {
    id: number;
    email: string;
    description: string;
    cost: number;
    name: string;
    service: string;
    whatsapp: string;
    modality: string;
}

export interface LancerItemProps{
    lancer: Lancer;
    loted: boolean;
}


const LancerItem: React.FC<LancerItemProps> = ({ lancer , loted}) =>  {
    
    const  [isLoted, setIsLoted] = useState(loted);
    
    const [lotHandkShakeColor, setLotHandkShakeColor] = useState(0);
    const color = [
        '#474553',
        '#4b97ff'
    ];

    function handleLotarServicePressed ( ) {
        if ( lotHandkShakeColor == 0 ) {
            setLotHandkShakeColor(lotHandkShakeColor => 1)
        } else {
            setLotHandkShakeColor(lotHandkShakeColor => 0)
        }
    }

    async function handleContactPressed ( ) {
        if(!isLoted) {
            
            const lotes = await AsyncStorage.getItem('lotados');

            let lotesArray = [];
            
            if(lotes){
                lotesArray = JSON.parse(lotes);
            }

            lotesArray.push(lancer);

            setIsLoted(true);
            await AsyncStorage.setItem('lotados', JSON.stringify(lotesArray));
        }
    }
   
    return (
    <View style={styles.container}>
        <View style={styles.upContainer}>
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
        <FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star-o" size={10} color="#F4F2DA" />
        </View>
        <ScrollView
            showsVerticalScrollIndicator={false}    
        >
        <Text style={styles.description}>{lancer.description}</Text>
        </ScrollView>
        </View>
        <View style={styles.footer}>
            <View style={styles.priceContainer}>
                
                <Text style={styles.modality}>{lancer.modality}</Text>
               
                <Text style={styles.cost}>R$ {lancer.cost},00</Text>
            </View>

            <View style={styles.buttonsContainer}>
               
                <TouchableOpacity style={[styles.lotarButton, styles.lotado]} onPress={handleLotarServicePressed}>
                    <FontAwesome name="handshake-o" size={24} color={color[lotHandkShakeColor]} /> 
                    {/*<Text style={styles.lotarTextButton}>Lotar Serviço</Text>*/}
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