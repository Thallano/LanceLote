import React, { useState, useEffect, useContext } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons, EvilIcons, FontAwesome, Feather} from '@expo/vector-icons';

import styles from './styles';
import intrologo from '../../../assets/intrologo.png';
import AuthContext from '../../contexts/auth';


 
function Dashboard (){
    const { navigate } = useNavigation();
    const { signOut } = useContext(AuthContext);

    function handleLanceButton(){
        navigate('Lance');
    }

    function handleLotButton() {
        navigate('MenuTabs');
    }

    function handleLogout() {
        signOut();
    };


    return (
        <>
        
        <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                {/*<Text style ={styles.loginButtonText}>LOGAR</Text> */}
                <FontAwesome name="sign-out" size={24} color="#FF514B" />
        </TouchableOpacity>
            <View style={styles.containerLogo}>
                <Image source={intrologo} style={styles.logoContainer} />
            </View>
            <View style={styles.headerIntro}>
                    <Text style={styles.titleBold}>
                    <Feather name="coffee" style={styles.coffee} size={25}/>   Seja Bem-vindo!{'\n'}
                        <Text style={styles.title}>A sua plataforma de serviços!</Text>
                    </Text>
            </View>   
           
            <View style={styles.buttonsContainerLance}>
               
            <TouchableOpacity style={[styles.button, styles.lanceButtonContainer]} onPress={handleLanceButton}>
                    <Text style={styles.lanceServiceTextButton}>LANÇAR</Text>
                    <FontAwesome name="gears" size={32} color="#14181C" />
                    <Ionicons name="ios-arrow-up" size={32} color="#14181C" />
            </TouchableOpacity>
                
            </View>
            <View style={styles.buttonsContainerLot}>
                
                <TouchableOpacity style={[styles.button, styles.lotButtonContainer]} onPress={handleLotButton}>
                    <Text style={styles.lotServiceTextButton}>LOTAR</Text>
                    <FontAwesome name="handshake-o" size={32} color="#14181C" />
                    <Ionicons name="ios-arrow-down" size={32} color="#14181C" />
                </TouchableOpacity>
               
            </View>

           {/* <View style={styles.logonContainer}>
                
                <TouchableOpacity style={[styles.button, styles.logonButtonContainer]} onPress={handleLotButton}>
                    <Text style={styles.logonServiceTextButton}>LOGAR</Text>
                    <Ionicons name="ios-log-in" size={32} color="#14181C" />
                </TouchableOpacity>
               
            </View>*/}
        </View>
        </>
    )
}

export default Dashboard;