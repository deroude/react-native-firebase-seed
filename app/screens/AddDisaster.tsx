import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import { View , Alert} from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";

const AddDisasterScreen = ({ navigation }: any): any => {

  const [text, setText] = React.useState("");

  const [selectedDisasterType, setSelectedDisasterType] = useState(null);

  const disasterTypeOptions = [
    { label: 'war', value: 'war' },
    { label: 'geological hazards', value: 'geological hazards' },
    { label: 'hydrological hazards', value: 'hydrological hazards' },
    { label: 'meteorogical hazards', value: 'meteorogical hazards' },
    { label: 'biological hazards', value: 'biological hazards' },
    { label: 'climatological hazards', value: 'climatological hazards' },
  ];

  const [selectedDisasterSeverity, setSelectedDisasterSeverity] = useState(null);

  const disasterSeverityOptions = [
    { label: 'high', value: 'high' },
    { label: 'moderate', value: 'moderate' },
    { label: 'low', value: 'low' },
  ];

  const [selectedVictimNumber, setSelectedVictimNumber] = useState(null);

  const disasterVictimNumberOptions = [
    { label: '<100', value: '<100' },
    { label: '100+', value: '100+' },
    { label: '250+', value: '250+' },
    { label: '500+', value: '500+' },
    { label: '1000+', value: '1000+' },
    { label: '5000+', value: '5000+' },
    { label: '10000+', value: '10000+' },
  ];

  const [selectedAffectedRegion, setAffectedRegion] = useState(null);

  const disasterAffectedRegion = [
    { label: 'neighbourhood', value: 'neighbourhood' },
    { label: 'city', value: 'city' },
    { label: 'country', value: 'country' },
    { label: 'multiple countries', value: 'multiple countries' },
    { label: 'ocean', value: 'ocean' },
  ];

  const handleAddDisaster = () => {
    Alert.alert('Disaster added');
  };
  return (
    <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: "center", paddingLeft: 20, paddingRight: 20 }}>

      <TextInput
        label="Zone"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      {/* Disaster Type */}
      <View style={{ marginVertical: 10 }}>
        <Text variant='headlineSmall'>Type:</Text>
        <RNPickerSelect
          placeholder={{label:"Select disaster type:"}}
          items={disasterTypeOptions}
          onValueChange={(value) => setSelectedDisasterType(value)}
          value={selectedDisasterType}
        />
      </View>

      {/* Disaster Severity */}
      <View style={{ marginVertical: 10 }}>
        <Text variant='headlineSmall'>Severity:</Text>
        <RNPickerSelect
          placeholder={{label:"Select disaster severity:"}}
          items={disasterSeverityOptions}
          onValueChange={(value) => setSelectedDisasterSeverity(value)}
          value={selectedDisasterSeverity}
        />
      </View>

      {/* Victim Number */}
      <View style={{ marginVertical: 10 }}>
        <Text variant='headlineSmall'>Victim number:</Text>
        <RNPickerSelect
          placeholder={{label:"Select victim number:"}}
          items={disasterVictimNumberOptions}
          onValueChange={(value) => setSelectedVictimNumber(value)}
          value={selectedVictimNumber}
        />
      </View>
     
    {/* Affected Region */}
    <View style={{ marginVertical: 10 }}>
    <Text variant='headlineSmall'>Affected region:</Text>
    <RNPickerSelect
      placeholder={{label:"Select affected region:"}}
      items={disasterAffectedRegion}
      onValueChange={(value) => setAffectedRegion(value)}
      value={selectedAffectedRegion}
      />
    </View>
    <Button buttonColor='#300A31' mode="outlined" style={{ alignSelf: 'center', height: 45, width: 200, marginVertical:10}}
                onPress={handleAddDisaster}
                textColor="white"
            >Add Disaster</Button> 
  </View>
  );
}

export default AddDisasterScreen
