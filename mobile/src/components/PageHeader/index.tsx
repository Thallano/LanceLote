import React, { ReactNode } from 'react';

import styles from './styles';

import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { FontAwesome } from '@expo/vector-icons';

interface PageHeaderProps{
    title: string;
    headerRight?: ReactNode;
    subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, headerRight ,children })=> {
    const { navigate } = useNavigation();

    function handleGoback(){
        navigate('Dashboard');
    }

    return (
    <View style={styles.container}>
        
        <FontAwesome name='long-arrow-left' size={20}  color='#F4F2DA' style={styles.Arrow} onPress={handleGoback}></FontAwesome>
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