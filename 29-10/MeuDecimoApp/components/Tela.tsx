import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTema } from '../context/TemaContext'
import Botao from './Botao';

export default function Tela() {
  const { temaEscuro } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: temaEscuro ? "#333" : "#fff" }]}>
      <Text style={[styles.texto, { color: temaEscuro ? "#fff" : "#000" }]}>
        Tela Atual: {temaEscuro ? "Escuro" : "Claro"}
      </Text>
      <Botao />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  },
  texto: {
    fontSize: 20,
  }
})