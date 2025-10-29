import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";
import { TemaProvider } from "./context/TemaContext";
import Tela from "./components/Tela";
import { UserProvider } from "./context/UserContext";
import TelaUser from "./components/TelaUser";

// Componente principal
export default function App2() {

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <UserProvider>
          <TelaUser/>
        </UserProvider>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    },
    input: {
      fontSize: 18,
      color: "#000000"
    },
    label: {
      fontSize: 22,
      fontWeight: 'bold',
      fontStyle: 'italic'
    }
})