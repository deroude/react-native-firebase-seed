import React, { useEffect, useState } from "react";
import { ActivityIndicator, Text } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AsyncStorage from '@react-native-async-storage/async-storage';

const ContactScreen = () => {

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

    return user ?
        <Text variant="body1">Contact: {user.displayName || user.email}</Text> :
        <ActivityIndicator />
        ;
}

export default ContactScreen;