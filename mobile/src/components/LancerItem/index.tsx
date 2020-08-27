import React, { useState } from "react";
import {View, Image, Text, Linking } from 'react-native';
import logo from '../../../assets/logo.png';
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 


function LancerItem ( ) {

    const [lotHandkShakeColor, setLotHandkShakeColor] = useState(0);
    const color = [
        '#2a0f0f',
        '#FF514B'
    ];

    function handleLotarServicePressed ( ) {
        if ( lotHandkShakeColor == 0 ) {
            setLotHandkShakeColor(lotHandkShakeColor => 1)
        } else {
            setLotHandkShakeColor(lotHandkShakeColor => 0)
        }
    }
    function handleLinkToWhatsapp ( ) {
        const count = 1;
    }
   
    return (
    <View style={styles.container}>
        <View style={styles.profile}>
            <Image
                style={styles.avatar}
                source={logo}
            />
            <View style={styles.profileInfo}>
                <Text style={styles.name}>Carlos Batista</Text>
                <Text style={styles.subject}>Serviços Gerais</Text>
            </View>
        </View>
        <View style={styles.profileRate}>
        <FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star" size={10} color="#F4F2DA" /><FontAwesome name="star-o" size={10} color="#F4F2DA" />
        </View>
        <Text style={styles.bio}>Trabalho de pedreiro, alvenaria, pintura, sou pau para toda obra. Tenho mais de 5 anos de experiência, trabalhei na obra de construção da ponte estaiada</Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Diária {'   '}
                <Text style={styles.priceValue}>R$ 150,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
               
                <TouchableOpacity style={[styles.lotarButton, styles.lotado]} onPress={handleLotarServicePressed}>
                    <FontAwesome name="handshake-o" size={24} color={color[lotHandkShakeColor]} /> 
                    {/*<Text style={styles.lotarTextButton}>Lotar Serviço</Text>*/}
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    <FontAwesome name="whatsapp" size={24} style={styles.whatsappIcon} />
                </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}

export default LancerItem;