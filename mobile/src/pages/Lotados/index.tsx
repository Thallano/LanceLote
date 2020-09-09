import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {View, Animated, AsyncStorage, Text, Alert, Picker, FlatList} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';

import PageHeader from '../../components/PageHeader';

import Swipeable from 'react-native-gesture-handler/Swipeable';
import api from '../../services/api';


function Lotados (){

const [lotados, setLotados] = useState<any>([]);

const [starPressed, setStarPressed] = useState(false);

const [service, setService] = useState<any>();
const [rate, setRate] = useState(0);
const [user_id, setUserId] = useState();
const [review, setReview] = useState('');
const [rated, setRated] = useState(0);

const [start1, setStart1] = useState(false);
const [start2, setStart2] = useState(false);
const [start3, setStart3] = useState(false);
const [start4, setStart4] = useState(false);
const [start5, setStart5] = useState(false);

const [rateCommit, setRateCommit] = useState(false);

function loadLogin ( ){
    AsyncStorage.getItem('login').then(response =>{
        if (response){
            const loginId = JSON.parse(response);
            setUserId(loginId);
        }
    });
}

useEffect (()=> {
    loadLogin();
},[])

function loadLotados(){
    AsyncStorage.getItem('lotados').then(response => {
        if (response){
            const lotedLancers = JSON.parse(response);
            setLotados(lotedLancers);
        }
    });
}

useEffect(() =>{
    loadLotados();
    
},[loadLotados])   

async function onRated ( ) {
    
    const response =  await api.put('services',{
        rate, /* ok */
        service, /* ok */
        user_id, /* ok */
        review, /* ok */
        rated   /* ok */
    }).then(() => {
        Alert.alert('Serviço Avaliado!');
        ('/');
        
    }).catch(() => {
        Alert.alert('Erro ao avaliar o serviço, tende de novo!');
    })   
}

const RightAction = ( progression: any, dragX: any ) => {

    const scale = dragX.interpolate({
                inputRange: [-75 , 0],
                outputRange: [1 , 0],
                extrapolate: 'clamp',      
        })
        return (
                
            <Animated.View style={{ transform: [{scale}]}}> 
                    <View style={styles.removeService}>
                    <Ionicons  name="ios-trash" size={30} color="#14181C" style={styles.iconServiceRemove} />
                    </View>
            </Animated.View>    
        )
    }
    
const LeftAction = ( progression: any, dragX: any ) => {
        const scale = dragX.interpolate({
                inputRange: [0, 75],
                outputRange: [0 , 1],
                extrapolate: 'clamp',
        })
        return (
                
            <Animated.View style={{ transform: [{scale}]}}> 
                                                        
                <View style={styles.rateContainer}> 
                    <View style={styles.rateContainerIcons}>
                        { starPressed && start1 == true
                        ? <TouchableOpacity>
                            <FontAwesome name="star" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(0)
                                setStart1(false)
                                setStart2(false)
                                setStart3(false)
                                setStart4(false)
                                setStart5(false)
                            }} 
                            />
                            </TouchableOpacity>
                        : <TouchableOpacity>
                            <FontAwesome name="star-o" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(1)
                                setStart1(true)
                            }} 
                            />
                            </TouchableOpacity>
                        }

                        { starPressed && start2 == true
                        ? <TouchableOpacity>
                            <FontAwesome name="star" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(0)
                                setStart1(false)
                                setStart2(false)
                                setStart3(false)
                                setStart4(false)
                                setStart5(false)
                            }} 
                            />
                            </TouchableOpacity>
                        : <TouchableOpacity>
                            <FontAwesome name="star-o" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(2)
                                setStart1(true)
                                setStart2(true)
                            }} 
                            />
                            </TouchableOpacity>
                        }

                        { starPressed && start3 == true
                        ? <TouchableOpacity>
                            <FontAwesome name="star" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(0)
                                setStart1(false)
                                setStart2(false)
                                setStart3(false)
                                setStart4(false)
                                setStart5(false)
                            }} 
                            />
                            </TouchableOpacity>
                        : <TouchableOpacity>
                            <FontAwesome name="star-o" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(3)
                                setStart1(true)
                                setStart2(true)
                                setStart3(true)
                            }} 
                            />
                            </TouchableOpacity>
                        }

                        { starPressed && start4 == true
                        ? <TouchableOpacity>
                            <FontAwesome name="star" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(0)
                                setStart1(false)
                                setStart2(false)
                                setStart3(false)
                                setStart4(false)
                                setStart5(false)
                            }} 
                            />
                            </TouchableOpacity>
                        : <TouchableOpacity>
                            <FontAwesome name="star-o" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(4)
                                setStart1(true)
                                setStart2(true)
                                setStart3(true)
                                setStart4(true)
                            }} 
                            />
                            </TouchableOpacity>
                        }
                        
                        { starPressed && start5 == true
                        ? <TouchableOpacity>
                            <FontAwesome name="star" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(0)
                                setStart1(false)
                                setStart2(false)
                                setStart3(false)
                                setStart4(false)
                                setStart5(false)
                            }} 
                            />
                            </TouchableOpacity>
                        : <TouchableOpacity>
                            <FontAwesome name="star-o" size={25} color="#4b97ff" 
                            onPress={()=>{
                                setStarPressed(!starPressed)
                                setRate(5)
                                setStart1(true)
                                setStart2(true)
                                setStart3(true)
                                setStart4(true)
                                setStart5(true)
                            }} 
                            />
                            </TouchableOpacity>
                        } 
                        
                    </View>

                                                 
                </View>
                
                            <View style={styles.reviewContainer}>
                            <TextInput 
                                style={styles.inputReview}
                                value={review}
                                onChangeText={text =>  setReview(text)}
                                placeholder="Faça um comentário sobre o serviço"
                                placeholderTextColor="#c1bccc"
                                multiline
                            
                            />
                            { starPressed &&
                            <TouchableOpacity style={styles.containerRateConfirm} onPress={()=>{
                                onRated()
                                splitServiceFromAS()
                                setRated(1)
                                }}>
                                <FontAwesome name="check" size={25} color="#4b97ff"  />
                                <Text style={styles.rateContainerTextNumber}>Avaliar</Text>
                            </TouchableOpacity>
                             }  
                            </View>
                         
            </Animated.View>    
        )
}

async function splitServiceFromAS (){
    const lotes = await AsyncStorage.getItem('lotados');

    let lotesArray = [{}];
        
    if(lotes){
        lotesArray = JSON.parse(lotes);
    }
    const lotadosIndex = lotesArray.findIndex((lotesArray: any)=>{
        return lotesArray.idService === service;
    })

    lotesArray.splice(lotadosIndex, 1);
    await AsyncStorage.setItem('lotados', JSON.stringify(lotesArray));
}


return (
        <>
        <PageHeader 
            title="Serviços Lotados"
            headerRight={(
            <TouchableOpacity >
               <FontAwesome name="gears" size={32} color="#14181C" />
            </TouchableOpacity>
        )}
    >
       
        </PageHeader>
        <View style={styles.bottomLancersContainer}>
                <FlatList
                    data={lotados}
                    showsVerticalScrollIndicator={false}
                    style={styles.containerItens}
                    contentContainerStyle={{
                        paddingBottom: 80,
                    }}
                    keyExtractor={lotados => String(lotados.idService)}
                    renderItem={({item: lotados})  => (
                        <>
                        <Swipeable 
                        renderLeftActions={LeftAction}
                        onSwipeableLeftOpen={()=>{
                            setService(lotados.idService)
                        }}
                        >  
                            <View style={styles.userServicesContainer}>
                                <View style={styles.headerServiceRate}>
                                    <MaterialCommunityIcons name="gesture-swipe-right" size={24} color="#F4F2DA" />
                                    <Text style={styles.serviceTextRate}>Avalie</Text>
                                </View>
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>{lotados.name}</Text>
                                    <Text style={styles.serviceText}>{lotados.service}</Text>
                                </View>
                                <Text style={styles.descriptionText}>{lotados.description}</Text>
                                <View style={styles.bottomContainer} >
                                    <Text style={styles.modalityText}>{lotados.modality}</Text>
                                    <Text  style={styles.costText}>R$ {lotados.cost}</Text>
                                </View>
                            </View>    
                        </Swipeable>
                        </>
                     )}
                />
         
        </View>
        </>
    )
}

export default Lotados;