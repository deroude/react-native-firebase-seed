import React, { useState } from "react";
import { Button, TextInput, Icon, IconButton, VStack } from "@react-native-material/core";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from 'firebase/auth';
import { StyleProp, ViewStyle } from "react-native";

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
        marginLeft: 20,
        marginRight: 20
    };

    return (
        <VStack fill center spacing={2} style={{ alignSelf: 'stretch' }}>
            <TextInput
                style={inputStyle}
                label="Email"
                variant="outlined"
                leading={props => <Icon name="account" {...props} />}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                variant="outlined"
                trailing={props => (
                    <IconButton
                        icon={props => <Icon name="eye" {...props} />} {...props}
                        onPress={() => setHidePassword(!hidePassword)}
                    />
                )}
                onChangeText={(password) => setPassword(password)}
            />
            <Button
                title="Login"
                onPress={() => signInWithEmailAndPassword(auth, email, password)}
            />
        </VStack>
    );
}

export default LoginScreen;