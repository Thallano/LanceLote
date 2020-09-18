import React, { useState } from "react";
import {View, Text, Linking } from 'react-native';

import styles from './styles';
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';


import AsyncStorage from '@react-native-community/async-storage';
import api from "../../services/api";

export interface Lancer {
    cost: number;
    description: string;
    email: string;
    id: string;
    idservice: string;
    loted: number;
    modality: string;
    rated: number;
    review_name: string;
    service: string;
    review: string;
    ratetotal: number;
    user_id: string;
    idService: string;
    name: string;
    instagram: string;
    web: string;
}

export interface ServiceProfileProps{
    lancer: Lancer
}

const ServiceProfile: React.FC<ServiceProfileProps> = ({lancer}) =>  {
    
           
    return (
        <>
            <View style={styles.container}>
                   
                        <View style={styles.userServicesContainer}>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>{lancer.review_name}</Text>
                                    <View style={styles.rightCorner}>
                                        <FontAwesome name="star" size={14} color="#F4F2DA" />
                                        <Text style={styles.ratedNumber}>{lancer.rated}</Text>
                                    </View>
                                </View>
                                <View style={styles.bottomContainer}>
                                    <Text style={styles.modalityText}>{lancer.review}</Text>
                                </View>
                        </View>
                
            </View>
        </>
    )
}

export default ServiceProfile;