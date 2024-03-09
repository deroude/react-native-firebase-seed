import React, { useState } from "react";
import MapView from 'react-native-maps';
import { Surface } from "react-native-paper";
import { TextInput } from "react-native-paper";
import {View, ScrollView } from 'react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { Marker } from "react-native-maps";
import { List } from 'react-native-paper';


const stil = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
  },
  search: {
    position: "absolute",
    top: 30,
    left: 5,
    right: 5,
    zIndex: 100,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth:2,
    marginTop:5,
  },
  container: {
    flex:1,
    height: 40,
    alignItems: 'center',
    marginTop:5,
    marginBottom: 5,
    backgroundColor: 'white',
  },
  
});

export default function HomeScreen({ navigation }: any) {
  const [search, setSearch] = useState("")
  const updateSearch = (search: string) => {
    setSearch(search)
  };
  const [value, setValue] = React.useState('');
  const initialRegion = {
    latitude: 37.72825,
    longitude: -122.4324,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  return (
    <View style={stil.container}>
      <MapView style={stil.map} initialRegion={initialRegion}>
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} />
      </MapView>
      <Surface style={stil.search}>
        <TextInput
          placeholder="Type Here..."
          onChangeText={text => updateSearch(text)}
          value={search}
        />
      <SafeAreaView style={stil.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
      <SegmentedButtons
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'war',
            label: 'war',
          },
          {
            value: 'geological hazards',
            label: 'geological',
          },
          { value: 'meteorological hazards', label: 'meteorological' },
          {
            value: 'hydrological hazards', label: 'hydrological'
          },
          {
            value: 'biological hazards', label: 'biological'
          }
        ]}
      />
      </ScrollView>
    </SafeAreaView>
    <List.Section>
      <List.Accordion
        title="Filters"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Severity"/>
        <List.Item title="Victims" />
        <List.Item title="Refion Affected"/>
        <List.Item title="Popularity"/>
      </List.Accordion>
    </List.Section>
    </Surface>
    </View>
  );
}



