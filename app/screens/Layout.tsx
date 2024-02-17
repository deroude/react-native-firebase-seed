import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar } from "react-native-paper";
import { ActivityIndicator, View } from "react-native";
import {
    getAuth,
    signOut
} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../firebase-config.json";
import { useNavigation } from "@react-navigation/native";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const MainLayout = ({ children }: any) => {

    const [user, setUser] = useState<{ displayName: string, email: string }>();

    const navigation = useNavigation() as any;

    useEffect(() => {
        const fetchUser = async () => {
            const storedUser = await AsyncStorage.getItem('@user');
            if (!!storedUser) {
                setUser(JSON.parse(storedUser));
            }
        }
        fetchUser();
    }, [])

    return (
        user ? <SafeAreaView>
            <Appbar.Header>
                <Appbar.Content title={`Welcome, ${user.displayName || user.email}`} />
                <Appbar.Action icon="logout" onPress={async () => { await signOut(auth); navigation.navigate('Login') }} />
            </Appbar.Header>
            <View style={{ alignSelf: 'stretch', backgroundColor: '#F4ECD6', height: '100%', display: 'flex', flexDirection: 'column' }}>{children}</View>

        </SafeAreaView> :
            <ActivityIndicator />
    );
}

export default MainLayout;