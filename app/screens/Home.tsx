import React, { useState } from "react";
import MapView from 'react-native-maps';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import {SearchBar} from "@rneui/themed";
import { View, Text, StyleSheet } from 'react-native';
import { color } from "@rneui/themed/dist/config";
export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});


type SearchBarComponentProps = {};

const SwitchComponent: React.FunctionComponent<SearchBarComponentProps> = () => {
const [search, setSearch] = useState("");

const updateSearch = (search: React.SetStateAction<string>) => {
  setSearch(search);
};

return (
  <View style={style.view}>
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
      style={{ height: 30, width: 330 }}
    />
  </View>
);
};

const style = StyleSheet.create({
  view: {
    margin: 10, 
    width: 330,
    color: '#FFFFF',
  },
  });
  const HomeScreen = ({ navigation }: any) => {

    const [data, setData] = useState<{ label: string, quantity: number }[]>();
  //map page
  } 
  
    
