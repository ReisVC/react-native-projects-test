// ==========================================
// ARQUIVO: src/components/ConteudoPD.tsx
// ==========================================

import React from "react";
import { View, Text } from "react-native";
import { BotaoTemaPD } from "./BotaoTemaPD";

// Este componente está no meio da hierarquia.
// Ele não usa o tema diretamente, mas precisa RECEBER e REPASSAR
// as props para o próximo nível (BotaoTemaPD).
// Isso deixa o código mais trabalhoso e difícil de manter.

interface ConteudoPDProps {
  temaEscuro: boolean;
  setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ConteudoPD = ({ temaEscuro, setTemaEscuro }: ConteudoPDProps) => {
  return (
    <View>
      <Text style={{ color: temaEscuro ? "#fff" : "#000" }}>
        Tema atual: {temaEscuro ? "Escuro" : "Claro"}
      </Text>

      {/* repassando props manualmente */}
      <BotaoTemaPD temaEscuro={temaEscuro} setTemaEscuro={setTemaEscuro} />
    </View>
  );
};