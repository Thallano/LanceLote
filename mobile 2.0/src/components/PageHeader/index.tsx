import React, { ReactNode } from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


import {  FontAwesome } from '@expo/vector-icons';


interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
    subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, headerRight ,children })=> {
    const { navigate } = useNavigation();

    function handleGoback(){
        navigate('Landing');
    }

    return (
    <View style={styles.container}>      
        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
        </View>
        <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
       
        {children}
    </View>)
}

export default PageHeader;