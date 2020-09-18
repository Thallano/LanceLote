import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles';

import api from '../../services/api';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';
import logo from '../../../assets/workerimg.png';
import { Alert } from 'react-native';


const ProfileServicePage: React.FC = () => {

const [ user_id, setUser_id ] = useState<any>([{}]);
const [ name, setName] = useState();
const [ instagram, setInstagram] = useState('');
const [ web, setWeb] = useState('');
const [ bio, setBio] = useState('');

async function loadLogin ( ){
    AsyncStorage.getItem('login').then(response =>{
        if (response){
            const loginId = JSON.parse(response);
            setUser_id(loginId[0]);
        }
    });
    AsyncStorage.getItem('loginName').then(response =>{
        if (response){
            const loginId = JSON.parse(response);
            setName(loginId);
        }
    });
}
console.log(user_id)
useEffect (()=> {
    loadLogin();
},[])

async function submitInstagram(){
    const response = await api.put('users', {
        bio,
        instagram,
        web,
        user_id     
}).then(() => {
    Alert.alert('Perfil Atualizado!');
}).catch(() => {
    Alert.alert('Link Inválido');
})
}

async function submitWeb(){
    const response = await api.put('users', {
        bio,
        instagram,
        web,
        user_id          
}).then(() => {
    Alert.alert('Perfil Atualizado!');
}).catch(() => {
    Alert.alert('Link Inválido');
})
}

return (
    <>
            <View style={styles.containerTotal}>
                
                <ScrollView 
                    style={styles.flatlistContainer}
                    showsVerticalScrollIndicator={false}
                    
                >
                    <View style={styles.container}>
                            <View style={styles.header}>
                                <TouchableOpacity > 
                                    <Image
                                    style={styles.avatar}
                                    source={logo}
                                    />
                                </TouchableOpacity>
                           
                            </View>
                            <View style={styles.footer}>
                                <Text style={styles.bio}>A nostalgia da suposta presença da "Coisa" que teria nos salvado do desamparo.</Text>
                                <Text style={styles.userName}>{name}</Text>
                                <FontAwesome name="edit" size={25} color="#4b97ff" />
                            </View >
                                <Text style={styles.bio}>Adicione outros links para pessoas lhe encontrarem!</Text>
                            <View style={styles.footerContacts}>
                                    <FontAwesome name="instagram" size={40} color="#4b97ff" />
                                    <TextInput 
                                        style={styles.inputLinks}
                                        value={instagram}
                                        onChangeText={text =>  setInstagram(text)}
                                        placeholder="Insira aqui o Link do Seu Instagram"
                                        placeholderTextColor="#c1bccc"
                                    />
                                <TouchableOpacity style={styles.checkIcon}>
                                    <FontAwesome name="edit" size={25} color="#4b97ff" onPress={submitInstagram}/>
                                </TouchableOpacity>
                               
                            </View>
                            <View style={styles.footerContacts}>
                                    <FontAwesome name="home" size={40} color="#4b97ff" />
                                    <TextInput 
                                        style={styles.inputLinks}
                                        value={web}
                                        onChangeText={text =>  setWeb(text)}
                                        placeholder="Insira aqui o seu facebook/página na web"
                                        placeholderTextColor="#c1bccc"
                                    />
                              
                                    <TouchableOpacity style={styles.checkIcon}>
                                            <FontAwesome name="edit" size={25} color="#4b97ff" onPress={submitWeb}/>
                                    </TouchableOpacity>
                            </View>
                    </View>
                </ScrollView>
            </View>
    </>
)

}

export default ProfileServicePage;