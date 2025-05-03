
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemEditScreen from "./ItemEdit";
import ItemListScreen from "./ItemList";
import { Searchbar } from 'react-native-paper';
import { StyleSheet } from 'react-native';

//https://reactnavigation.org/docs/hello-react-navigation
const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const stil = StyleSheet.create({
        Searchbar: {
            position: "absolute",
            top: 45,
            left: 5,
            right: 5,
            zIndex: 100,
            borderColor: "red",
            borderStyle: "solid",
            borderWidth: 2,
            marginTop: 5,
            display: "flex",
            flexDirection: "row",
          },
    })
    return (
      <Searchbar
        placeholder="Search"
        onChangeText={setSearchQuery}
        value={searchQuery}
        style={stil.Searchbar} />
    );
  };
  
  export default Search;