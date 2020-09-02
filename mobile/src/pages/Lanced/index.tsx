import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, TextInput, Animated, FlatList } from 'react-native';


import {  MaterialCommunityIcons, Ionicons, MaterialIcons} from '@expo/vector-icons';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';

import styles from './styles';
import Swipeable from 'react-native-gesture-handler/Swipeable';



function Lanced (){
   
/*const userLogin = AsyncStorage.getItem('userStorage');*/
    
    const [usersid, setUsersId] = useState<any>([]);
    const [user, setUserId] = useState('');
    
    async function handleServiceSubmit(){
        
        const response = await api.get('listservicesbyuser', {
            params:{
                user
            }
        })
        setUsersId(response.data)
    } 
    
    const [service, setServiceId] = useState([]);

    async function handleDelete(){
        
        const response = await api.delete('services', {
                params:{
                    service
                }           
        }).then(() => {
            alert('Serviço deletado com sucesso!');
            
        }).catch(() => {
            alert('Erro ao deletar serviço');
        })
        useEffect(() => {
            handleServiceSubmit()
        },[service])
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
                            setServiceId(usersid.id)
                            handleDelete();
                        }} />
                        </View>
                </Animated.View>    
            )
}

function handleSwpOpen( ){
    alert("Você está prestes a excluír um serviço")
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
                    <View style={styles.searchForm}>
                        <View style={styles.inputSearchFormContainer}>
                            <Text style={styles.label}>Id do Usuario</Text>
                            <TextInput 
                                style={styles.input}
                                value={user}
                                onChangeText={text =>  setUserId(text)}
                                placeholder="Confirme para nós o seu ID"
                                placeholderTextColor="#c1bccc" 
                            />
                        </View>
                        <View style={styles.buttonLanceContainer}>
                            <TouchableOpacity style={styles.buttonLance} 
                                onPress={()=>{
                                    handleServiceSubmit();
                                }} >
                                <MaterialCommunityIcons name="arrow-top-right-thick" size={26} color="#4b97ff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                        
            <FlatList
                data={usersid}
                showsVerticalScrollIndicator={false}
                style={styles.flatListContainer}
                keyExtractor={usersid => String(usersid.id)}
                renderItem={({item: usersid})  => (
                
                <Swipeable 
                    renderRightActions={RightAction}
                    onSwipeableRightOpen={()=>{
                        setServiceId(usersid.id)
                        handleSwpOpen();
                    }}
                   /* renderLeftActions={LeftAction}*/
                >
                    <View style={styles.userServicesContainer}>
                        <View style={styles.headerService}>
                            <Text style={styles.serviceText}>{usersid.service}</Text>
                            <MaterialCommunityIcons name="gesture-swipe-left" size={24} color="#F4F2DA" />
                        </View>
                        <Text style={styles.descriptionText}>{usersid.description}</Text>
                        <View style={styles.bottomContainer}>
                            <Text style={styles.modalityText}>{usersid.modality}</Text>
                            <Text style={styles.costText}>R$ {usersid.cost},00</Text>
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