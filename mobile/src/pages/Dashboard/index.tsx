import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Ionicons, FontAwesome, Feather} from '@expo/vector-icons';

import styles from './styles';
import intrologo from '../../../assets/intrologo.png';

import AuthContext from '../../contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';


function Dashboard (){
    const [ loginIdPass, setLoginIdPass ] = useState([]);

    const { navigate } = useNavigation();
    const { signOut } = useContext(AuthContext);

    function handleLanceButton(){
        navigate('MenuTabsLance');
    }

    function handleLotButton() {
        navigate('MenuTabsLot');
    }

    function handleLogout() {
        signOut();
        AsyncStorage.clear();
    };
    
    function loadLogin ( ){
        AsyncStorage.getItem('login').then(response =>{
            if (response){
                const loginId = JSON.parse(response);
                setLoginIdPass(loginId);
            }
        });
    }
    
    useEffect (()=> {
        loadLogin();
    },[])
    
    return (
        <>
        
        <View style={styles.container}>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                <FontAwesome name="power-off" size={24} color="#4b97ff" />  
                <Text style ={styles.userIDText}>Seu ID: {loginIdPass}</Text>
        </TouchableOpacity>
            <View style={styles.containerLogo}>
                <Image source={intrologo} style={styles.logoContainer} />
            </View>
            <View style={styles.headerIntro}>
                    <Text style={styles.titleBold}>
                    <Feather name="coffee" style={styles.coffee} size={25}/>   Seja Bem-vindo!{'\n'}
                        <Text style={styles.title}>Essa é a sua plataforma de serviços</Text>
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

        </View>
        </>
    )
}

export default Dashboard;