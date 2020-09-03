import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons'; 
import intrologo from '../../../assets/intrologo.png';

import api from '../../services/api';

import styles from './styles';
import AuthContext from '../../contexts/auth';

import AsyncStorage from '@react-native-community/async-storage';


const SingIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);

    const [loginIdPass, setLoginIdPass] = useState<any>([]);
    
    const { navigate } = useNavigation();
  
    
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');

function handleSingUp ( ) {
    navigate('SingUp');
};

async function handleLogin (){
        if (email && password != ''){
            const response = await api.get('users', {
                params:{
                    email,
                    password 
            }
            });
            if (response.data == ''){
            Alert.alert("Usuário/Senha incorreto ou Usuário não existe")
            }
            const loginId = response.data.map((login: any) => {
                return  login.id
            })
            console.log(loginId)
            setLoginIdPass(loginId)
            console.log(loginIdPass)
            await AsyncStorage.setItem('login', JSON.stringify(loginId));
    } else {
        Alert.alert("Usuário/Senha incorreto ou Usuário não existe")
    }
}

useEffect(() =>{
    loginIdPass.map((id: any) =>{
        signIn();
    })
},[loginIdPass])

return (
    <>
        
    <View style={styles.loginForm}>

        <View style={styles.containerLogo}>
            <Image source={intrologo} style={styles.logoContainer} />
        </View>  
                
            <View style={styles.inputBlock}>
                <Text style={styles.label}>E-mail do usuário</Text>
                <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={text =>  setEmail(text)}
                    placeholder="E-mail do usuário"
                    placeholderTextColor="#c1bccc"
                    autoCapitalize='none'
                />
                </View>
                
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        secureTextEntry={true}
                        onChangeText={text =>  setPassword(text)}
                        placeholder="Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>
            <Text  style ={styles.forgotPassword}>*Esqueceu a <Text style ={styles.forgotPasswordLink}>senha?</Text></Text>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <FontAwesome name="sign-in" size={24} color="#14181C" />
            </TouchableOpacity>
            
           
            <Text  style ={styles.textSingUp}>ainda não é <Text onPress={handleSingUp} style ={styles.textSingUpLink}>Cadastrado?</Text></Text>
           
    </View>
    </>
)
}

export default SingIn;