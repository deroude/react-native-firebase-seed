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
    color: 'FFFFF',
  
  },

});
const ProfileScreen = ({ navigation }: any): any => {


 
  return (
    
    <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%'}}>

 
    </View>

  );
  }

export default ProfileScreen
