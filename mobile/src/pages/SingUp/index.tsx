import React, { useState, useEffect, FormEvent } from 'react';
import { View, ScrollView, Text, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';

import api from '../../services/api';

const SingUp: React.FC = () => {

    const [users, setUsers] = useState([]);

    const [name, setName]= useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');
    const [instagram, setInstagram] = useState('');
    const [web, setWeb] = useState('');
    

    async function handleUserSubmit ( ) {
        if (password != passwordCheck ) {
            alert("Senhas não coincidem")
        } else if( email && name && password != '' ){
            const response = await api.post('users', {
                email,
                name,
                password,
                whatsapp,
                bio,
                instagram,
                web
            }).then(() => {
                Alert.alert('Cadastro realizado com sucesso!');
                ('/');
            }).catch(() => {
                Alert.alert('Erro no cadastro!');
            })
            
        } else {
            alert('Preencha todos campos do cadastro!');
            /*setUsers(response.data);*/
        }
        
    }

return (
    <>
    <View style={styles.searchForm}>  

        <View>
            <Text style={styles.singUpTittleText}>CADASTRO</Text>
        </View>
        
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
            <View style={styles.inputGroup}>

                <View style={styles.inputBlock}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    value={email}
                    autoCompleteType='email'
                    autoCapitalize='none'
                    onChangeText={text =>  setEmail(text)}
                    placeholder="Seu E-mail"
                    placeholderTextColor="#c1bccc"
                />
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

                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput 
                        style={styles.input}
                        value={passwordCheck}
                        secureTextEntry={true}
                        onChangeText={text =>  setPasswordCheck(text)}
                        placeholder="Confirme a Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>

                {/*<View style={styles.inputBlock}>
                    <Text style={styles.label}>Whatsapp</Text>
                    <TextInput 
                        style={styles.input}
                        value={whatsapp}
                        autoCompleteType="tel"
                        onChangeText={text =>  setWhatsapp(text)}
                        placeholder="DDD00000000"
                        placeholderTextColor="#c1bccc"
                        dataDetectorTypes='phoneNumber'
                    />
                </View>*/}
                </View>
                                             
            <TouchableOpacity style={styles.submitButton} onPress={handleUserSubmit}>
                <Text style ={styles.submitButtonText}>Criar Conta</Text>
            </TouchableOpacity>
   
    </ScrollView>
    </View>
    </>
)
}

export default SingUp;