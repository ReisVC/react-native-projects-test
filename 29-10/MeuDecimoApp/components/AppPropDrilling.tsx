// ==========================================
// ARQUIVO: src/AppPropDrilling.tsx
// ==========================================

import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { ConteudoPD } from "../components/ConteudoPD";

// EXEMPLO SEM CONTEXTO (PROP DRILLING)
//
// Aqui, o estado do tema (escuro/claro) está no App.
// Para que componentes "netos" consigam acessar ou alterar o tema,
// precisamos passar as props manualmente até lá.
// Isso é ineficiente e deixa o código verboso.

export default function AppPropDrilling() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: temaEscuro ? "#333" : "#fff" },
      ]}
    >
      <Text style={{ color: temaEscuro ? "#fff" : "#000", marginBottom: 10 }}>
        Exemplo sem Contexto (Prop Drilling)
      </Text>

      {/* Aqui passamos o tema e a função manualmente */}
      <ConteudoPD temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});