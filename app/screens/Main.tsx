import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from "./ChatAI";
import SearchScreen from "./Search";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import AccountScreen from "./Account";
import FeedScreen from "./Feed";
import HomeScreen from "./Home"
import Entypo1 from '@expo/vector-icons/Entypo';
//https://reactnavigation.org/docs/tab-based-navigation
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
                    <Entypo name="home" size={24} color="grey" />
                ),
            }}
        />     
        <Tab.Screen
            name="Feed"
            component={FeedScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="account-circle" size={24} color="grey" />
                ),
            }}
        />     
        <Tab.Screen
            name="Chat"
            component={ChatScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Chat',
                tabBarIcon: ({ color }) => (
                    <Entypo name="chat" size={24} color="grey" />
                ),
            }}
        />
        <Tab.Screen
            name="Search"
            component={SearchScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Search',
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="search" size={24} color="grey" />
                ),
            }}
        />   
        <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Account',
                tabBarIcon: ({ color }) => (
                    <MaterialIcons name="account-circle" size={24} color="grey" />
                ),
            }}
        />         
    </Tab.Navigator>
);

export default MainNavigator;