import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { Paragraph } from "react-native-paper";
import { View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


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
    position: 'relative', 
  },
  circle: {
    width: 150, 
    height: 150,
    borderRadius: 80, 
    backgroundColor: '#A7CAB1',
    position: 'absolute', 
    bottom: -25, 
    alignSelf: 'center',
    top: 180,
  },
  rectangle: {
    width: 350, 
    height: 345, 
    position: 'absolute', 
    bottom: -100, 
    alignSelf: 'center',
    top: 400,
    backgroundColor: 'rgba(167, 202, 177, 0.5)',
  },
  rectangle1: {
    width: 315, 
    height: 80, 
    backgroundColor: '#A7CAB1', 
    position: 'absolute', 
    top: 25,
    alignSelf: 'center', 
    borderColor: 'black'
  },
  rectangle2: {
    width: 315, 
    height: 80, 
    backgroundColor: '#A7CAB1', 
    position: 'absolute', 
    top: 130,
    alignSelf: 'center', 
  },
 
  rectangle4: {
    width: 315, 
    height: 80, 
    backgroundColor: '#A7CAB1', 
    position: 'absolute', 
    top: 235,
    alignSelf: 'center', 
  },
  rectangleText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 80,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  icon: {
    marginLeft: 20,
    marginTop: 15,
    position:'absolute'
  },


});
const ProfileScreen = ({ navigation }: any): any => {
  return (
    
    <View style={{ backgroundColor: '#F4ECD6', alignSelf: 'stretch', display: 'flex', flexDirection: 'column', height: '100%'}}>

<View style={stil.textContainer}>
        <Text style={stil.Text}>Account Name</Text>
        <View style={stil.circle}></View>
        <View style={stil.rectangle}>
        <View style={stil.rectangle1}>
        <Icon name="gear" size={45} color="white" style={stil.icon} />
        <Text style={stil.rectangleText}>Settings</Text>
        </View>
        <View style={stil.rectangle2}>
        <Text style={stil.rectangleText}>My Donations</Text>
        <Icon name="gift" size={45} color="white" style={stil.icon} />
        </View>
        <View style={stil.rectangle4}>
        <Text style={stil.rectangleText}>Sign Out</Text>
        <Icon name="sign-out" size={45} color="white" style={stil.icon} />
        </View>
        </View>
       
      </View>

    </View>

  );
  }

export default ProfileScreen
