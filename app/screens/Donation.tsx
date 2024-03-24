import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainLayout from "./Layout";
import { IconButton, Paragraph, Snackbar } from "react-native-paper";
import { SafeAreaView, ScrollView, View } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Button, TextInput, Text } from "react-native-paper";
//here you import

const DonationScreen = ({ navigation }: any): any => {

  const [donation, setDonation] = React.useState(0);
  const [sent, setSent] = React.useState(false)

  return (
    <>
      <SafeAreaView>
        <ScrollView style={{ marginTop: '30%', padding: 20 }}>
          <TextInput
            label="Amount"
            left={<TextInput.Affix text="$" />}
            style={{ marginBottom: 30 }}
            inputMode="numeric"
            onChange={ev => setDonation(Number(ev.nativeEvent.text))}
          />
          <Button mode='outlined' onPress={() => setSent(true)}>Send</Button>
        </ScrollView>
      </SafeAreaView>
      <Snackbar
        visible={sent}
        onDismiss={console.log}
      >
        <Text style={{ color: 'white' }}>Thanks for your donation of {donation}$.</Text>
      </Snackbar>
    </>
  );
}

export default DonationScreen
