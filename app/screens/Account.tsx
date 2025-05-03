import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemEditScreen from "./ItemEdit";
import ItemListScreen from "./ItemList";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const ItemScreen = () => {
    return (
        <MainLayout>
            <Paragraph>da</Paragraph>
       </MainLayout>
    );
}

export default ItemScreen;