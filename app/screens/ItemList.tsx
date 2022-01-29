import React, { useEffect, useState } from "react";
import MainLayout from "./Layout";
import { getFirestore, onSnapshot, collection } from 'firebase/firestore';
import { Button, DataTable } from "react-native-paper";

const db = getFirestore();

const ItemListScreen = ({ navigation }: any) => {

        const [data, setData] = useState<{ id?: string, label: string, quantity: number }[]>([]);

        useEffect(() => {
                const unsubscribe = onSnapshot(
                        collection(db, 'items'),
                        snapshot => {
                                setData(snapshot.docs.map(d => ({ ...d.data() as any, id: d.id })))
                        });
                return () => unsubscribe();
        }, [data]);
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