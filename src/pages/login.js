import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../assets/css/css';
import { useNavigation } from '@react-navigation/native'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    const handleLogin = () => {
        if(email === '' && password === ''){
            navigation.navigate('main');
        }else{
            alert('E-mail ou senha inválidos')
        }
    }
     
    return (
        <View style={styles.container}>
            <Image style={styles.image}
            source={require('../assets/image/techweek_2023.png')}
            />
            <TextInput
            style={styles.input}
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail} 
            />          
            <TextInput
            style={styles.input}
            placeholder='Senha'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword} 
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>          
        </View>
    )
}

export default Login;