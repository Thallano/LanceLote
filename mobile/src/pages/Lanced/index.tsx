import React, { useState, useEffect } from 'react';
import { View,  Text,  Animated, FlatList, Alert } from 'react-native';
import {  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import AsyncStorage from '@react-native-community/async-storage';
import { useFocusEffect } from '@react-navigation/native';

function Lanced (){

    const [usersData, setUsersData] = useState<any>([]);
    const [user, setUserId] = useState('');
    const [count, setCount] = useState(0);

function catchuserId ( ){
    AsyncStorage.getItem('login').then(response => {
        if (response){
            const loginId = JSON.parse(response);
            setUserId(loginId);
            setCount(count +1)
        }
    });
}

useEffect (()=>{
    if (count < 2){
        catchuserId();
        loadingUserServices();
    } else {

    }
},[count])

useFocusEffect (
    React.useCallback(() => {
        loadingUserServices();
      }, [user])
);

async function loadingUserServices(){
    if (user != ''){
    const response = await api.get('listservicesbyuser', {
        params:{
            user
        }
    })
    setUsersData(response.data)
    }
}  

const [service, setServiceId] = useState([]);

async function handleDelete(){  
        
        await api.delete('services', {
                params:{
                    service
                }           
        }).then(() => {
            Alert.alert('Serviço deletado com sucesso!');
            
        }).catch(() => {
            alert('Erro ao deletar serviço');
        })
        setCount(count => 0)
}

   
const RightAction = ( progression: any, dragX: any ) => {
    
        const scale = dragX.interpolate({
                    inputRange: [-75 , 0],
                    outputRange: [1 , 0],
                    extrapolate: 'clamp',      
            })
            return (
                    
                <Animated.View  style={{ transform: [{scale}]}}> 
                        <View style={styles.removeService}>
                        <Ionicons  name="ios-trash" size={55} color="#FF514B" style={styles.iconServiceRemove} 
                        
                        onPress={()=>{
                            setServiceId(usersData.id)
                            handleDelete();
                        }} />
                        </View>
                </Animated.View>    
            )
}

function handleSwpOpen( ){
    Alert.alert("Você está prestes a excluír um serviço")
}
        
/*const LeftAction = ( progression: any, dragX: any ) => {
            const scale = dragX.interpolate({
                    inputRange: [0, 75],
                    outputRange: [0 , 1],
                    extrapolate: 'clamp',
            })
            return (
                    
                <Animated.View style={{ transform: [{scale}]}}> 
                        <View style={styles.editService}>
                        <TouchableOpacity >
                        <FontAwesome name="edit" size={30} color="#4b97ff" style={styles.iconRateService}  />
                        </TouchableOpacity>
                        </View>
                </Animated.View>    
            )
}*/

    return (
            <>
            <PageHeader 
            title="Serviços Lançados"
            headerRight={<Text></Text>}
            ></PageHeader>
            
            <View style={styles.container}>
                    
                <FlatList
                    data={usersData}
                    showsVerticalScrollIndicator={false}
                    style={styles.flatListContainer}
                    contentContainerStyle={{
                        paddingBottom: 80,
                    }}
                    keyExtractor={usersData => String(usersData.idService)}
                    renderItem={({item: usersData})  => (
                    
                    <Swipeable 
                        renderRightActions={RightAction}
                        /* renderLeftActions={LeftAction}*/
                        onSwipeableRightOpen={()=>{
                            setServiceId(usersData.idService)
                            handleSwpOpen();
                            console.log(service)
                        }}
                    
                    >
                        <View style={styles.userServicesContainer}>
                            <View style={styles.headerService}>
                                <Text style={styles.serviceText}>{usersData.service}</Text>
                                <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                            </View>
                            <Text style={styles.descriptionText}>{usersData.description}</Text>
                            <View style={styles.bottomContainer}>
                                <Text style={styles.modalityText}>{usersData.modality}</Text>
                                <Text style={styles.costText}>R$ {usersData.cost}</Text>
                            </View>
                        </View>
                    </Swipeable>
                    
                    )}
                />
            </View>
            </>
        )
}

export default Lanced;