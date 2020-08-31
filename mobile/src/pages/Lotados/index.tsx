import React, { useState } from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {View, Animated, AsyncStorage } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from './styles';

import PageHeader from '../../components/PageHeader';

import LancerItem, {Lancer} from '../../components/LancerItem';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AsyncStorate from '@react-native-community/async-storage';

function handleRateOnPress ( ){

}

/*async function handleRemoveLoter ( ){
    const [isLoted, setIsLoted] = useState(loted);
    const lotados = await AsyncStorage.getItem('lotados');

    let lotadosArray = [];

    if (lotados){
        lotadosArray = JSON.parse(lotados);
    }

    if (isLoted){
        const lotadosIndex = lotadosArray.findIndex((lancerItem: Lancer) => {
            return lancerItem.id === lancer.id;
        });

        lotadosArray.splice(lotadosIndex, 1)
    }
}*/

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
                <View style={styles.rateService}>
                <TouchableOpacity onPress={handleRateOnPress}>
                <FontAwesome name="star" size={20} color="#F4F2DA" style={styles.iconRateService}  />
                <FontAwesome name="star" size={20} color="#F4F2DA" style={styles.iconRateService} />
                <FontAwesome name="star" size={20} color="#F4F2DA" style={styles.iconRateService} />
                <FontAwesome name="star" size={20} color="#F4F2DA" style={styles.iconRateService} />
                <FontAwesome name="star-o" size={20} color="#F4F2DA" style={styles.iconRateService} />
                </TouchableOpacity>
                </View>
        </Animated.View>    
    )
}

function Lotados (){
   
    const [lotados, setLotados] = useState([]);

function loadLotados(){
    AsyncStorage.getItem('lotados').then(response => {
        if (response){
            const lotedLancers = JSON.parse(response);
            setLotados(lotedLancers);
        }
    });
}
    useFocusEffect(() =>{
        loadLotados();
})

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
            <ScrollView
                style={styles.containerItens}
                showsVerticalScrollIndicator= {false}
                horizontal={false}
            >
            
            {lotados.map((lancer: Lancer) =>{
                return(
                    <Swipeable 
                    renderRightActions={RightAction}
                    renderLeftActions={LeftAction}
                    >
                    <LancerItem 
                        key={lancer.id}
                        lancer={lancer}
                        loted
                    />
                    </Swipeable>
                )
            })}
        
            </ScrollView>
            
         
        </View>
        </>
    )
}

export default Lotados;