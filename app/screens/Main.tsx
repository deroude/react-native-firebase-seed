import React from "react";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from "./Home page/Home";
import ItemScreen from "./Items";
import AddDisasterScreen from "./AddDisaster";

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
                    <Icon name="home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Add Disaster"
            component={AddDisasterScreen}
            options={{
                headerShown: false,
                tabBarLabel: 'Add Disaster',
                tabBarIcon: ({ color }) => (
                    <Icon name="plus" color={color} size={26} />
                ),
            }}
        />       
    </Tab.Navigator>
);

export default MainNavigator;