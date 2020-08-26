import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons, EvilIcons, FontAwesome} from '@expo/vector-icons';

import styles from './styles';
import intrologo from '../../../assets/intrologo.png';
import Swipeable from 'react-native-gesture-handler/Swipeable';

 
function Dashboard (){
    const { navigate } = useNavigation();

    function handleLanceButton(){
        navigate('Lance');
    }

    function handleLotButton() {
        navigate('Lot');
    }

    return (
        <>
        <View style={styles.container}>
            

            <View style={styles.containerLogo}>
                <Image source={intrologo} style={styles.logoContainer} />
            </View>
            
            <View style={styles.buttonsContainer2}>
               
            <TouchableOpacity style={[styles.button, styles.lanceButtonContainer]} onPress={handleLanceButton}>
                    <Text style={styles.lanceServiceTextButton}>LANÇAR</Text>
                    <FontAwesome name="gears" size={32} color="#14181C" />
                    <Ionicons name="ios-arrow-up" size={32} color="#14181C" />
            </TouchableOpacity>
                
            </View>
            <View style={styles.buttonsContainer}>
                
                <TouchableOpacity style={[styles.button, styles.lotButtonContainer]} onPress={handleLotButton}>
                    <Text style={styles.lotServiceTextButton}>LOTAR</Text>
                    <FontAwesome name="handshake-o" size={32} color="#14181C" />
                    <Ionicons name="ios-arrow-down" size={32} color="#14181C" />
                </TouchableOpacity>
               
            </View>
        </View>
        </>
    )
}

export default Dashboard;