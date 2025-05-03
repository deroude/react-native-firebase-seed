import React, { useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";



const LoginScreen = ({ navigation }: any) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [hidePassword, setHidePassword] = useState(true);

    const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
    };

    const signIn = async () => {
        navigation.navigate('Main')
    }

    return (
        <View style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '50%', marginTop: '30%' }}>
            <TextInput
                mode="outlined"
                style={inputStyle}
                label="Email"
                value={email}
                onChangeText={(email: string) => setEmail(email)}
            />
            <TextInput
                mode="outlined"
                label="Password"
                style={inputStyle}
                secureTextEntry={hidePassword}
                value={password}
                onChangeText={(password) => setPassword(password)}
                right={<TextInput.Icon icon="eye" onPress={() => setHidePassword(!hidePassword)} />}
            />
            <Button mode="outlined" style={{ alignSelf: 'center', width: '50%' }}
                onPress={signIn}
            >Login</Button>
        </View>
    );
}

export default LoginScreen;