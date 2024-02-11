import React, { useState } from "react";
import { getApp, getApps, initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    getAuth,
    initializeAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword
} from 'firebase/auth';
//@ts-ignore
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, TextInput, Text } from "react-native-paper";

// const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });
let app,auth:any
if (!getApps().length) {
    try {
      app = initializeApp(firebaseConfig);
      auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
    } catch (error) {
      console.log("Error initializing app: " + error);
    }
  } else {
    app = getApp();
    auth = getAuth(app);
  }

const LoginScreen = ({ navigation }: any) => {
    const goDirectlyToMain=()=> {
        navigation.navigate('Main')
    }
    onAuthStateChanged(auth, user => {
        console.log(user)
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
        <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex' , flexDirection: 'column', height: '100%', justifyContent: "center"}}>
            <Text variant="displayMedium">Sign In</Text>
            <TextInput
                mode="flat"
                style={inputStyle}
                label="Email"
                value={email}
                onChangeText={(email: string) => setEmail(email)}
                left={<TextInput.Icon icon="email" />}
            />
            <TextInput
                mode="flat"
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(password) => setPassword(password)}
                left={<TextInput.Icon icon="lock" />}
                right={<TextInput.Icon icon="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <Button buttonColor='#300A31' mode="outlined" style={{ alignSelf: 'center'}}
                //onPress={() => signInWithEmailAndPassword(auth, email, password)}
                onPress={goDirectlyToMain}
                textColor="white"
            >Sign In</Button> 
        </View>
    );
}

export default LoginScreen;