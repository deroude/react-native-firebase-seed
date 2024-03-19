import React, { useState } from "react";
import MapView, { Callout} from 'react-native-maps';
import { Surface } from "react-native-paper";
import { TextInput } from "react-native-paper";
import {View, ScrollView, TouchableOpacity } from 'react-native';
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
      <Marker coordinate={{ latitude: 37.78825, longitude: -122.4324 }} >
      <Callout>
            <View>
            </View>
          </Callout>
      </Marker>
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
        title="Severity"
        onPress={handlePress}>
        <List.Item title="High"/>
        <List.Item title="Moderate" />
        <List.Item title="Low"/>
      </List.Accordion>
      <List.Accordion
      title="Victims"
      onPress={handlePress}>
      <List.Item title="1000+"/>
      <List.Item title="500+"/>
      <List.Item title="250+"/>
      <List.Item title="100+"/>
      <List.Item title="1+"/>
      <List.Item title="0"/>
      </List.Accordion>
      <List.Accordion
      title="Affected Region"
      onPress={handlePress}>
      <List.Item title="Multiple Countries"/>
      <List.Item title="A Country"/>
      <List.Item title="A City"/>
      <List.Item title="A neighbourghood"/>
      </List.Accordion>
      <List.Accordion
      title="Popularity"
      onPress={handlePress}>
      <List.Item title="High Approval"/>
      <List.Item title="Approved"/>
      <List.Item title="Low Approval"/>
      </List.Accordion>
      
    </List.Section>
    </Surface>
    </View>
  );
}



