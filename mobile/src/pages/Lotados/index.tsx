import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {View, AsyncStorage, Text, Alert, FlatList} from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';

import PageHeader from '../../components/PageHeader';

import api from '../../services/api';


function Lotados (){

const [lotados, setLotados] = useState<any>([]);

const [starPressed, setStarPressed] = useState(false);

const [service, setService] = useState<any>();
const [rate, setRate] = useState(0);
const [user_id, setUserId] = useState();
const [review, setReview] = useState('');
const [reload, setReload] = useState(false);

const [ review_name  , setReviewName] = useState();

const [starIcon, setStarIcon] = useState<number>(0);

const star = [
    {review: 1},
    {review: 2},
    {review: 3},
    {review: 4},
    {review: 5}
]

function loadLogin ( ){
    AsyncStorage.getItem('login').then(response =>{
        if (response){
            const loginId = JSON.parse(response);
            setUserId(loginId[0]);
        }
    });
    AsyncStorage.getItem('loginName').then(response =>{
        if (response){
            const loginName = JSON.parse(response);
            setReviewName(loginName[0]);
        }
    });
}

useFocusEffect (
    React.useCallback(() => {
        loadLogin();
        loadLotados();
      }, [reload])
);

function loadLotados(){
    AsyncStorage.getItem('lotados').then(response => {
        if (response){
            const lotedLancers = JSON.parse(response);
            setLotados(lotedLancers);
        }
    });
}

/*console.log(service)
console.log(rate)
console.log(user_id)
console.log(review)
console.log(review_name)*/

async function onRated ( ) {
    
    const response =  await api.put('services',{
        rate, /* ok */
        service, /* ok */
        user_id, /* ok */
        review, /* ok */
        review_name  /* ok*/
    }).then(() => {
        Alert.alert('Serviço Avaliado!');
        setReload(!reload)
    }).catch(() => {
        Alert.alert('Você já avaliou este serviço!');
        setReload(!reload)
    })   
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
                                    { starPressed &&
                                    
                                        <View style={styles.reviewContainer}>
                                               
                                        <TextInput 
                                        style={styles.inputReview}
                                        value={review}
                                        onChangeText={text =>  setReview(text)}
                                        placeholder="Faça um comentário sobre o serviço"
                                        placeholderTextColor="#c1bccc"
                                        multiline

                                        />

                                            <TouchableOpacity style={styles.containerRateConfirm} onPress={()=>{
                                            onRated()
                                            splitServiceFromAS()
                                            }}>
                                                <FontAwesome name="check" size={25} color="#4b97ff"  />
                                                
                                            </TouchableOpacity>
                                            {setService(lotados.idService)}
                                        </View>
                                    }   
                                    <View style={styles.rateContainer}>
                                        
                                        <View style={styles.rateContainerIcons}>
                                            <FlatList 
                                                data={star}
                                                horizontal={true}
                                                keyExtractor={star => String(star.review)}
                                                renderItem={({item}) => (
                                                    
                                                        <TouchableOpacity 
                                                            >
                                                        { starPressed && starIcon >= item.review 
                                                            ? <FontAwesome name="star" size={25} color="#4b97ff" 
                                                            onPress={()=>{
                                                            setRate(0)
                                                            setStarPressed(false)
                                                            }} 
                                                            />
                                                            : <FontAwesome name="star-o" size={25} color="#4b97ff" 
                                                            onPress={()=>{
                                                            setRate(item.review)
                                                            setStarIcon(item.review)
                                                            setStarPressed(true)
                                                            }} 
                                                            />
                                                        }
                                                        
                                                        </TouchableOpacity>
                                                        
                                                       
                                                    
                                            )
                                            }                                                  
                                            />
                                        </View>
                                </View>
                          
                            <View style={styles.userServicesContainer}>
                               
                                    <View style={styles.headerServiceRate}>
                                        <FontAwesome name="hand-o-up" size={24} color="#F4F2DA" onPress={()=>{
                                            
                                        }}/>
                                        <Text style={styles.serviceTextRate}>Avalie</Text>
                                    </View>
                                
                                <View style={styles.headerService}>
                                    <Text style={styles.serviceText}>{lotados.name}</Text>
                                    <Text style={styles.serviceTextSubtitle}>{lotados.service}</Text>
                                </View>
                                <Text style={styles.descriptionText}>{lotados.description}</Text>
                                <View style={styles.bottomContainer} >
                                    <Text style={styles.modalityText}>{lotados.modality}</Text>
                                    <Text  style={styles.costText}>R$ {lotados.cost}</Text>
                                </View>
                            </View>    
                       
                        </>
                     )}
                />
         
        </View>
        </>
    )
}

export default Lotados;