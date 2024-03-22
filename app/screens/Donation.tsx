import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
//here you import

const DonationScreen = ({ navigation }: any): any => {

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
  //here you define the constants
  return (
    
<TextInput
label={"Donation Screen"}
/>
   //you put the code here
  );
}

export default DonationScreen
