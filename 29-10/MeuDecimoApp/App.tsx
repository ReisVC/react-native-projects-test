import React, { createContext, useContext, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native";

const UsuarioContext = createContext("Visitante");

function useUsuario() {
  return useContext(UsuarioContext);
}

// Componente que mostra o nome
function MostrarUsuario() {
  const nome = useUsuario(); // Pega o nome direto do contexto
  return nome.trim() !== "" ? <Text style={styles.label}>Olá {nome.trim()}</Text> : "";
}

// Componente intermediário que só repassa a prop
function Painel() {
  return <MostrarUsuario />;
}

// Componente principal
export default function App() {
  const [nome, setNome] = useState("");

  return (
    <SafeAreaProvider style={styles.container}>
      <SafeAreaView style={styles.container}>
        <TextInput
        placeholder='Digite seu nome...'
        value={nome}
        onChangeText={setNome}
        style={styles.input}/>

        <UsuarioContext value={nome}>
          <Painel />
        </UsuarioContext>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
    container: {
      borderWidth: 3,
      padding: 10,
      borderColor: '#000000'
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