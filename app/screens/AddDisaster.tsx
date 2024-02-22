import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";

const AddDisasterScreen = ({ navigation }: any): any => {

  const [text, setText] = React.useState("");

  const [selectedDisasterType, setSelectedDisasterType] = useState(null);

  const disasterTypeOptions = [
    { label: 'war', value: 'war' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedDisasterSeverity, setSelectedDisasterSeverity] = useState(null);

  const disasterSeverityOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  return (
    <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%', justifyContent: "center", paddingLeft: 20, paddingRight: 20 }}>

      <TextInput
        label="Zone"
        value={text}
        onChangeText={text => setText(text)}
      />

      <Text variant='headlineSmall'>Type:</Text>
      <RNPickerSelect
        placeholder={{label:"Select disaster type:"}}
        items={disasterTypeOptions}
        onValueChange={(value) => setSelectedDisasterType(value)}
        value={selectedDisasterType}
      />
      
      <RNPickerSelect
        placeholder={{label:"Select disaster severity:"}}
        items={disasterSeverityOptions}
        onValueChange={(value) => setSelectedDisasterSeverity(value)}
        value={selectedDisasterSeverity}
      />
      

    </View>
  );
}

export default AddDisasterScreen
