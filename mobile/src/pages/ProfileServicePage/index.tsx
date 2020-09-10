import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';
import ProfileItem, { Lancer } from '../../components/ProfileItem';
import api from '../../services/api';
import { ScrollView } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity } from 'react-native';

import {  MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const ProfileServicePage: React.FC = () => {

const [ usersData, setUsersData ] = useState<any>([{}]);
const [ service, setService] = useState('');
const [ serviceIdConv, setServiceIdConv] = useState<string>();
const [ lancer, setLancer] = useState(false);
const [ name, setName] = useState();

async function loadLogin ( ){
    await AsyncStorage.getItem('idService').then(response =>{
        if (response){
            const serviceAId = JSON.parse(response);
            setService(serviceAId[0]);
            /*const serviceConv = JSON.stringify(serviceIdConv)
            console.log(serviceIdConv)
            setService(serviceConv)*/
            loadReview();
            setLancer(true)
        }
    });
}

useEffect (()=> {
    loadLogin();
},[lancer])

/*async function loadProfile(){
    if (serviceId != ''){
    const response = await api.get('listservicesbyuser', {
        params:{
            serviceId
        }
    })
    setUsersData(response.data)
    setLancer(true)
    console.log(usersData)
    }
}*/

async function loadReview(){
    if (service != ''){
        const response = await api.get('listreview', {
            params:{
                service
            }
        })
        setUsersData(response.data)
        setName(usersData.idService)
        console.log(response.data)
    }
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
                                <MaterialCommunityIcons name="worker" size={90} color="#F4F2DA"  />
                                </TouchableOpacity>
                           
                                <Text style={styles.userName}>{service}</Text>
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.bio}>A nostalgia da suposta presença da "Coisa" que teria nos salvado do desamparo.</Text>
                            </View >
                                <Text style={styles.bio}>Você pode me achar também em:</Text>
                            <View style={styles.footerContacts}>
                                <TouchableOpacity>
                                    <FontAwesome name="instagram" size={40} color="#4b97ff" />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <FontAwesome name="facebook-f" size={40} color="#4b97ff" />
                                </TouchableOpacity>
                            </View>
                        <View style={styles.reviewContainer}>
                    
                        { usersData.map((lancer: Lancer) =>{
                            return (
                                <ProfileItem 
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