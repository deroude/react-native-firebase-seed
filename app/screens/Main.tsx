import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Home";
import ContactScreen from "./Contact";

const Tab = createBottomTabNavigator();

const MainNavigator = () => (

    <Tab.Navigator>
        <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Contact"
            component={ContactScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Contact',
                tabBarIcon: ({ color }) => (
                    <Icon name="pen" color={color} size={26} />
                ),
            }} />
    </Tab.Navigator>
);

export default MainNavigator;