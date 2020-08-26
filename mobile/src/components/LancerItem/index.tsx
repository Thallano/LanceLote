import React from "react";
import {View, Image, Text, Linking } from 'react-native';
import logo from '../../../assets/logo.png';
import styles from './styles';
import { RectButton } from "react-native-gesture-handler";
import { FontAwesome } from '@expo/vector-icons'; 


function LancerItem ( ) {
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
        <Text style={styles.bio}>Trabalho de pedreiro, alvenaria, pintura, sou pau para toda obra.Trabalho de pedreiro, alvenaria, pintura, sou pau para toda obra.</Text>

        <View style={styles.footer}>
            <Text style={styles.price}>
                Preço/hora {'   '}
                <Text style={styles.priceValue}>R$ 150,00</Text>
            </Text>

            <View style={styles.buttonsContainer}>
               
                <RectButton style={[styles.favoriteButton, styles.favorited]}>
                
                <FontAwesome name="star" size={20} color="#F4F2DA" /><FontAwesome name="star" size={20} color="#F4F2DA" /><FontAwesome name="star" size={20} color="#F4F2DA" /><FontAwesome name="star" size={20} color="#F4F2DA" /><FontAwesome name="star-o" size={20} color="#F4F2DA" />
                </RectButton>

                <RectButton onPress={handleLinkToWhatsapp} style={styles.contactButton}>
                    {/*<Text style={styles.contactButtonText}>Contato</Text>*/}
                    <FontAwesome name="whatsapp" size={24} style={styles.whatsappIcon} />
                </RectButton>
            </View>
        </View>
    </View>
    )
}

export default LancerItem;