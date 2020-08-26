import React from 'react';
import {View, Text, ImageBackground } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Lance (){
    return (
        <>
        <PageHeader title="Lançar"></PageHeader>
        <View style={styles.container}>
            <RectButton style={styles.button}>
                <Text style={styles.buttontext}>Quero Lançar um Serviço</Text>
            </RectButton>
        </View>
        </>
    )
}

export default Lance;