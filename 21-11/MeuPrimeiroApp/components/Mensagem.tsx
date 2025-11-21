import React from "react";
import { Text, StyleSheet } from "react-native";

interface Props {
  texto: string;
}

export default function Mensagem({ texto }: Props) {
  return <Text style={styles.texto}>{texto}</Text>;
}

const styles = StyleSheet.create({
  texto: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 10,
  },
});
