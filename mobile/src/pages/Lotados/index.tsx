import React, { useState } from 'react';
import {View, Text, ImageBackground, TextInput, Animated } from 'react-native';
import { RectButton, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from './styles';
import PageHeader from '../../components/PageHeader';
import LancerItem from '../../components/LancerItem';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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

function handleRateOnPress ( ){

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
            <Swipeable 
            renderRightActions={RightAction}
            renderLeftActions={LeftAction}
            >
           
            </Swipeable>

            <Swipeable
                renderRightActions={RightAction}
                renderLeftActions={LeftAction}
            >
                                
            
            </Swipeable>
            </ScrollView>
            
         
        </View>
        </>
    )
}

export default Lotados;