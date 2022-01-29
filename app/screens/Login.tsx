import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LoginScreen = ({ navigation }: any) => {

    onAuthStateChanged(auth, user => {
        if (user != null) {
            AsyncStorage.setItem('@user', JSON.stringify(user))
                .then(() => navigation.navigate('Main'));
        }
    });

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };

    return (
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '50%', marginTop: '30%' }}>
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Email"
                value={email}
                autoComplete={false}
                onChangeText={(email: string) => setEmail(email)}
            />
            <TextInput
                mode="outlined"
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={password}
                autoComplete={false}
                onChangeText={(password) => setPassword(password)}
                right={<TextInput.Icon name="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <Button mode="outlined" style={{ alignSelf: 'center' }}
                onPress={() => signInWithEmailAndPassword(auth, email, password)}
            >Login</Button>
        </View>
    );
}

export default LoginScreen;