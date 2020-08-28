import React, { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { FontAwesome } from '@expo/vector-icons'; 
import intrologo from '../../../assets/intrologo.png';

import styles from './styles';
import AuthContext from '../../contexts/auth';


const SingIn: React.FC = () => {
    const { signed, signIn } = useContext(AuthContext);
   
    const { navigate } = useNavigation();

    const [name, setName]= useState('');
    const [password, setPassword] = useState('');

    function handleSingUp ( ) {
        navigate('SingUp');
    };

    function handleSingIn ( ) {
        signIn();
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
                        secureTextEntry={true}
                        onChangeText={text =>  setPassword(text)}
                        placeholder="Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>
            <Text  style ={styles.forgotPassword}>*Esqueceu a <Text style ={styles.forgotPasswordLink}>senha?</Text></Text>

            <TouchableOpacity style={styles.loginButton} onPress={handleSingIn}>
                {/*<Text style ={styles.loginButtonText}>LOGAR</Text>*/}
                <FontAwesome name="sign-in" size={24} color="#14181C" />
            </TouchableOpacity>
            
           
            <Text  style ={styles.textSingUp}>ainda não é <Text onPress={handleSingUp} style ={styles.textSingUpLink}>Cadastrado?</Text></Text>
           
    </View>
    </>
)
}

export default SingIn;