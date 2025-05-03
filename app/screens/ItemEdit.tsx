import React, { useState } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Button, TextInput } from "react-native-paper";
import MainLayout from "./Layout";

const inputStyle: StyleProp<ViewStyle> = {
        alignSelf: 'stretch',
        margin: 20
};


const ItemEditScreen = ({ navigation, route }: any) => {
        const [item, setItem] = useState<{ label: string, quantity: number, id?: string }>(route.params?.item || {})

        return <MainLayout>
                <TextInput
                        style={inputStyle}
                        label="Label"
                        value={item.label}
                        autoComplete="off"
                        onChangeText={(label: string) => setItem({ ...item, label })}
                />
                <TextInput
                        style={inputStyle}
                        label="Quantity"
                        value={`${item.quantity || 0}`}
                        keyboardType="numeric"
                        autoComplete="off"
                        onChangeText={(quantity: string) => setItem({ ...item, quantity: Number(quantity) })}
                />

                <Button mode="outlined" style={{ alignSelf: 'center' }}
                        onPress={async () => {                                
                                navigation.navigate('ItemList');
                        }}
                >Save</Button>
        </MainLayout>
}

export default ItemEditScreen;