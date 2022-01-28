import React, { useEffect, useState } from "react";
import { ActivityIndicator, AppBar, IconButton } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {

    const [user, setUser] = useState<{ displayName: string, email: string }>();

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
        <SafeAreaView>
            {user ?
                <AppBar
                    title={`Welcome, ${user.displayName || user.email}`}
                    titleStyle={{ fontSize: 15 }}
                    leading={props => (
                        <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
                    )}
                /> :
                <ActivityIndicator />}
        </SafeAreaView>
    );
}

export default HomeScreen;