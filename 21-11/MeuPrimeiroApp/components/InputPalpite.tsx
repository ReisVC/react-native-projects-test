import React from "react";
import { TextInput, StyleSheet } from "react-native";

interface Props {
  valor: string;
  setValor: (v: string) => void;
}

export default function InputPalpite({ valor, setValor }: Props) {
  return (
    <TextInput
      style={styles.input}
      keyboardType="numeric"
      value={valor}
      onChangeText={setValor}
      placeholder="Digite seu palpite"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: 200,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
});
