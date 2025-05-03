import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { Button, DataTable } from "react-native-paper";

const ItemListScreen = ({ navigation }: any) => {

        const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([
                { id: '1', label: 'Apples', quantity: 5 }, 
                { id: '2', label: 'Bananas', quantity: 3 }, 
                { id: '3', label: 'Oranges', quantity: 7 }
        ]);

        /**
         https://callstack.github.io/react-native-paper/data-table.html
         */
        return <MainLayout>
                <DataTable>
                        <DataTable.Header>
                                <DataTable.Title>Item</DataTable.Title>
                                <DataTable.Title numeric>Quantity</DataTable.Title>
                        </DataTable.Header>
                        {data.map(d => <DataTable.Row key={d.id} onPress={() => navigation.navigate('ItemEdit', { item: d })}>
                                <DataTable.Cell>{d.label}</DataTable.Cell>
                                <DataTable.Cell numeric>{d.quantity}</DataTable.Cell>
                        </DataTable.Row>)}
                </DataTable>

                <Button mode="outlined" style={{ alignSelf: 'center', marginTop: 30 }} onPress={() => navigation.navigate('ItemEdit')}>Add</Button>
        </MainLayout >
}



export default ItemListScreen;