import React, { useState } from "react";
import { View, TextInput, Button, ScrollView, StyleSheet, ActivityIndicator, Text } from "react-native";
import { Paragraph } from "react-native-paper";
import MainLayout from "./Layout";
import { fetchGeminiResponse } from "../../utils/geminiApi"; 

const ChatScreen = () => {
  const [messages, setMessages] = useState([{ sender: "user", text: "" }]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev: any) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    const aiText = await fetchGeminiResponse(input); 
    const aiMessage = { sender: "ai", text: aiText };

    setMessages((prev) => [...prev, aiMessage]);
    setLoading(false);
  };

  return (
    <MainLayout>
      <ScrollView style={styles.chatContainer}>
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.message,
              msg.sender === "user" ? styles.userMessage : styles.aiMessage,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}
        {loading && <ActivityIndicator size="small" color="#0000ff" />}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Pune o intrebare"
        />
        <Button title="Trimite" onPress={sendMessage} />
      </View>
    </MainLayout>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    padding: 10,
    borderRadius: 8,
    marginVertical: 4,
    maxWidth: "80%",
  },
  userMessage: {
    alignSelf: "flex-end",
    backgroundColor: "#d1e7dd",
  },
  aiMessage: {
    alignSelf: "flex-start",
    backgroundColor: "#f8d7da",
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
  },
});
