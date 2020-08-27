import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './styles';

function SingUp (){

    const [users, setUsers] = useState([]);
    
    const [name, setName]= useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');

return (
    <>
    <View style={styles.searchForm}>

        <View>
            <Text style={styles.singUpTittleText}>CADASTRO</Text>
        </View>
            <View style={styles.inputGroup}>

                <View style={styles.inputBlock}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput 
                    style={styles.input}
                    value={email}
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
                        onChangeText={text =>  setPassword(text)}
                        placeholder="Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>

                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Confirmar Senha</Text>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={text =>  setPassword(text)}
                        placeholder="Confirme a Senha"
                        placeholderTextColor="#c1bccc"
                    />
                </View>

                <View style={styles.inputBlock}>
                    <Text style={styles.label}>Whatsapp</Text>
                    <TextInput 
                        style={styles.input}
                        value={whatsapp}
                        onChangeText={text =>  setWhatsapp(text)}
                        placeholder="DDD00000000"
                        placeholderTextColor="#c1bccc"
                    />
                </View>
                </View>
                                             
            <TouchableOpacity style={styles.submitButton}>
                <Text style ={styles.submitButtonText}>Criar Conta</Text>
            </TouchableOpacity>
    </View>
    </>
)
}

export default SingUp;