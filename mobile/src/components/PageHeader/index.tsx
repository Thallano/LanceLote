import React, { ReactNode } from 'react';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';

import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight ,children })=> {
    const { navigate } = useNavigation();

    function handleGoback(){
        navigate('Landing');
    }

    return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <BorderlessButton onPress={handleGoback}>
            </BorderlessButton>        
        </View>

        <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        {headerRight}
        </View>
        {children}
    </View>)
}

export default PageHeader;