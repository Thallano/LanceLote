import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import intrologo from '../../../assets/intrologo.png';

import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const SingIn: React.FC = () => {

    const { navigate } = useNavigation();

    const [name, setName]= useState('');
    const [password, setPassword] = useState('');

    function handleLogin ( ) {
        navigate('Dashboard');
    };

    function handleSingUp ( ) {
        navigate('SingUp');
    };
  
return (
    <>
        
    <View style={styles.loginForm}>

        <View style={styles.containerLogo}>
            <Image source={intrologo} style={styles.logoContainer} />
        </View>  
                
            <View style={styles.inputBlock}>
                <Text style={styles.label}>Nome do usuário</Text>
                <TextInput 
                    style={styles.input}
                    value={name}
                    onChangeText={text =>  setName(text)}
                    placeholder="Nome do usuário"
                    placeholderTextColor="#c1bccc"
                />
                </View>
                
                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={text =>  setPassword(text)}
                        placeholder="Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>
            <Text  style ={styles.forgotPassword}>*Esqueceu a <Text style ={styles.forgotPasswordLink}>senha?</Text></Text>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style ={styles.loginButtonText}>LOGAR</Text>
            </TouchableOpacity>
            
           
            <Text  style ={styles.textSingUp}>ainda não é <Text onPress={handleSingUp} style ={styles.textSingUpLink}>Cadastrado?</Text></Text>
           
    </View>
    </>
)
}

export default SingIn;