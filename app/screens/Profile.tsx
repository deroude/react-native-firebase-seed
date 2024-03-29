import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native';


const stil = StyleSheet.create({
  Text: {
    fontSize: 24,
    fontWeight: 'bold', 
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 20,
    textAlign: 'center'
  
  },
  textContainer: {
    backgroundColor: '#A7CAB1', 
    padding: 10, 
    borderRadius: 20, 
    marginBottom: 20,
    alignItems: 'center', 
    justifyContent: 'center', 
  },

});
const ProfileScreen = ({ navigation }: any): any => {
  return (
    
    <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%'}}>

<View style={stil.textContainer}>
        <Text style={stil.Text}>Account Name</Text>
      </View>

    </View>

  );
  }

export default ProfileScreen
