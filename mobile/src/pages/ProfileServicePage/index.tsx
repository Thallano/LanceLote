import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import ServiceProfile, { Lancer } from '../../components/ServiceProfile';
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import {  MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/workerimg.png';


const ProfileServicePage: React.FC = () => {

const [ usersData, setUsersData ] = useState<any>([{}]);
const [ service, setService] = useState('');
const [ serviceName, setServiceName] = useState<string>();
const [ name, setName] = useState('');
const [ count, setCount ] = useState (0);


async function loadLogin ( ){
    await AsyncStorage.getItem('idService').then(response =>{
        if (response){
            const serviceAId = JSON.parse(response);
            setService(serviceAId[0]);
            loadReview();
            
        }
    });
}

useEffect (()=> {
    
    loadLogin();
    
},[service])

async function loadReview(){
    if (service != ''){
        const response = await api.get('listreview', {
            params:{
                service
            }
        })
        setUsersData(response.data)
        usersData.map((lancer: Lancer) =>{
            return setName(lancer.name)     
        })

        usersData.map((lancer: Lancer) =>{
            return setServiceName(lancer.service)     
        })
       
    }
    
    console.log('executou')
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
                                <TouchableOpacity>
                                    <FontAwesome name="instagram" size={40} color="#4b97ff" />
                                </TouchableOpacity>
                                <TouchableOpacity>
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