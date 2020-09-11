import React, { useContext, useEffect, useState } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, Feather, MaterialCommunityIcons} from '@expo/vector-icons';

import styles from './styles';
import intrologo from '../../../assets/intrologo.png';

import AuthContext from '../../contexts/auth';
import AsyncStorage from '@react-native-community/async-storage';


function Dashboard (){
    const { signOut } = useContext(AuthContext);
    const { navigate } = useNavigation();

    const [ loginIdPass, setLoginIdPass ] = useState([]);
    const [count, setCount ] = useState(0);

    function handleProfileButton(){
        navigate('ProfilePage');
    }

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
        AsyncStorage.getItem('loginName').then(response =>{
            if (response){
                const loginId = JSON.parse(response);
                setLoginIdPass(loginId);
                setCount(count +1)
            }
        });
    }
    
    useEffect (()=> {
        if (count < 3 ){
        loadLogin();
        }
    },[count])
    
    return (
        <>
        
        <View style={styles.container}>
            <View style={styles.logoutButton}>
                <TouchableOpacity onPress={handleLogout}>
                        <FontAwesome name="power-off" size={24} color="#4b97ff" />  
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileContainer} onPress={handleProfileButton}>
                    <MaterialCommunityIcons name="worker" size={40} color="#F4F2DA"  />
                    <Text style ={styles.userIDText} >{loginIdPass}</Text>
                </TouchableOpacity>
              
            </View>
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