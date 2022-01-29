import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemEditScreen from "./ItemEdit";
import ItemListScreen from "./ItemList";

//https://reactnavigation.org/docs/hello-react-navigation
const ItemStack = createNativeStackNavigator();

const ItemScreen = () => {
    return <ItemStack.Navigator>
        <ItemStack.Screen name="ItemList" component={ItemListScreen} options={{ headerShown: false }} />
        <ItemStack.Screen name="ItemEdit" component={ItemEditScreen} options={{ headerShown: false }} />
    </ItemStack.Navigator>
}

export default ItemScreen;