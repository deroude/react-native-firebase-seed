import React, { useState } from "react";
import MapView, { Callout} from 'react-native-maps';
import { Surface } from "react-native-paper";
import { TextInput } from "react-native-paper";
import {View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { Marker } from "react-native-maps";
import { List } from 'react-native-paper';
import { Dialog, Portal, Text, Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';

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
    latitude: 48.383022,
    longitude: 31.1828699,
    latitudeDelta: 0.25,
    longitudeDelta: 0.15
  };
  const [expanded, setExpanded] = React.useState(true);
  const handlePress = () => setExpanded(!expanded);
  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);
  const [markerDialogVisible, setMarkerDialogVisible] = React.useState(false);
  const showMarkerDialog = () => {
    setMarkerDialogVisible(true);
    return null;
  };
  const handleYesButtonPress = () => {
    setMarkerDialogVisible(false); 
  };
  const handleNoButtonPress = () => {
    setMarkerDialogVisible(false); 
  };

  return (
    <View style={stil.container}>
      <MapView style={stil.map} initialRegion={initialRegion}>
      <Marker
  coordinate={{ latitude: 48.383022, longitude: 31.1828699 }}
  onPress={showMarkerDialog} 
>
<Icon
  name="warning"
  size={30}
  color="red"
  style={{
    textShadowColor: 'red',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    shadowColor: 'red', 
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6, 
    elevation: 3,
  }}
/>
</Marker>
      </MapView>
      <Portal>
        <Dialog visible={markerDialogVisible} onDismiss={hideDialog}>
        <Dialog.Title>
            <Text style={{ fontWeight: 'bold' }}>You clicked on the war between Ukraine and Russia</Text>
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">Is this hazard real?</Text>
            <Text variant="bodyMedium">100.000+ other people say it is a real threat</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={handleNoButtonPress}>No</Button>
            <Button onPress={handleYesButtonPress}>Yes</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

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
            icon: () => <Icon name="warning" size={20}  />,
            label: 'war',
          },
          {
            value: 'geological hazards',
            label: 'geological',
            icon: () => <Icon name="landslide" size={20}  />,
          },
          { value: 'meteorological hazards', 
          label: 'meteorological',
          icon: () => <Icon name="cloud" size={20}  />, 
        },
          {
            value: 'hydrological hazards',
            label: 'hydrological',
            icon: () => <Icon name="water" size={20}  />, 
          },
          {
            value: 'biological hazards',
            label: 'biological',
            icon: () => <Icon name="man" size={20}  />, 
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



