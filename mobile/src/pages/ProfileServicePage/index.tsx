import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import ServiceProfile, { Lancer } from '../../components/ServiceProfile';
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, Linking } from 'react-native';

import {  FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/workerimg.png';
import { useFocusEffect } from '@react-navigation/native';


const ProfileServicePage: React.FC = () => {


const [ userName, setuserName] = useState<any>([{}]);
const [ usersData, setUsersData ] = useState<any>([{}]);
const [ service, setService] = useState('');
const [ serviceName, setServiceName] = useState<string>();
const [ serviceInstagram, setServiceInstagram] = useState<string>();
const [ serviceWeb, setServiceWeb] = useState<string>();
const [ name, setName] = useState('');
const [ servCatch, setServCatch] = useState(false);
const [ reload, setReload] = useState(false);

async function loadLogin ( ){
    await AsyncStorage.getItem('idService').then(response =>{
        if (response){
            const serviceAId = JSON.parse(response);
            setService(serviceAId[0]);
            setReload(true)
            console.log("Executou 0")
        }
    });
}

useFocusEffect (
    React.useCallback(() => {
        loadLogin()
      }, [reload])
);

useEffect (()=> {
    if (servCatch == false){
        loadReview()
        loadUserbyService()
    }
},[reload])

async function loadReview(){
    const response = await api.get('listreview', {
        params:{
            service
        }
    })
    setUsersData(response.data)
}

async function loadUserbyService(){
    const response = await api.get('listServiceUser', {
        params:{
            service
        }
    })

    setuserName(response.data)

    userName.map((lancer: Lancer) =>{
        return setName(lancer.name)     
    })
    userName.map((lancer: Lancer) =>{
        return setServiceName(lancer.service)     
    })
    userName.map((lancer: Lancer) =>{
        return setServiceInstagram(lancer.instagram)     
    }) 
    userName.map((lancer: Lancer) =>{
        return setServiceWeb(lancer.web)     
    }) 
    console.log(response.data)
}

function instagramPressed(){   
    /*<WebView source={{ uri: `${serviceInstagram}` }} style={{ marginTop: 20 }} />*/
    Linking.openURL(`${serviceInstagram}`)
}

function webPressed(){       
    /*<WebView source={{ uri: `${serviceInstagram}` }} style={{ marginTop: 20 }} />*/
    Linking.openURL(`${serviceWeb}`)
}

return (
    <>
            <View style={styles.containerTotal}>
                
                <ScrollView 
                    style={styles.flatlistContainer}
                    showsVerticalScrollIndicator={false}
                    
                >
                    <View style={styles.container}>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={loadReview}> 
                                    <Image
                                    style={styles.avatar}
                                    source={logo}
                                    />
                                </TouchableOpacity>
                           
                                <Text style={styles.userName}>{name}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.service}>{serviceName}</Text>
                            </View >
                                <Text style={styles.bio}>Você pode me achar também em:</Text>
                            <View style={styles.footerContacts}>
                                <TouchableOpacity onPress={()=> {
                                    instagramPressed()        
                                }}>
                                    <FontAwesome name="instagram" size={40} color="#4b97ff" />
                                </TouchableOpacity>
                                <TouchableOpacity  onPress={()=> {
                                    webPressed()        
                                }}>
                                    <FontAwesome name="home" size={40} color="#4b97ff" />
                                </TouchableOpacity>
                            </View>
                        <View style={styles.reviewContainer}>
                    
                        { usersData.map((lancer: Lancer) =>{
                            return (
                                <ServiceProfile 
                                    lancer={lancer}
                                    key={lancer.user_id}
                                />
                            )
                            })
                        }
                        
                        </View>
                    </View>
                </ScrollView>
            </View>
    </>
)

}

export default ProfileServicePage;