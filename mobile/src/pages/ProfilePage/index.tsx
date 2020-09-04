import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfilePage: React.FC = () => {

const [ loginIdPass, setLoginIdPass ] = useState([]);

function loadLogin ( ){
    AsyncStorage.getItem('login').then(response =>{
            if (response){
                const loginId = JSON.parse(response);
                setLoginIdPass(loginId);
            }
        });
}

useEffect (()=> {
    loadLogin();
},[])

return (
    <View style={styles.container}>
        <View style={styles.header}>
            <View style={styles.image}>
            {/*<FontAwesome name="user-o" size={90} color="#F4F2DA" />*/}
            <MaterialCommunityIcons name="worker" size={90} color="#F4F2DA" />
            </View>
            <Text style={styles.userName}>Nome do Usuário</Text>
        </View>
        <View style={styles.footer}>
        <TouchableOpacity>
        <FontAwesome name="edit" size={30} color="#4b97ff" style={styles.iconEditBio}  />
        </TouchableOpacity>
        <Text style={styles.bio}>Bio:{'\n'}O assujeitamento ao Outro reprime o polo hostil da ambivalência afetiva do complexo paterno produz uma marca psíquica da nostalgia da suposta presença da "Coisa" que teria nos salvado do desamparo.</Text>

        </View >
        <Text style={styles.bio}>Você pode me achar também em:</Text>
        <View style={styles.footerContacts}>
            <TouchableOpacity>
            <FontAwesome name="instagram" size={24} color="#4b97ff" />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="linkedin" size={24} color="#4b97ff" />
            </TouchableOpacity>
            <TouchableOpacity>
            <FontAwesome name="facebook-f" size={24} color="#4b97ff" />
            </TouchableOpacity>
        </View>

    </View>
)

}

export default ProfilePage;