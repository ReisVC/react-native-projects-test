// ==========================================
// ARQUIVO: src/components/BotaoTemaPD.tsx
// ==========================================

import React from "react";
import { Button } from "react-native";

// Este componente está em um nível "baixo" na hierarquia.
// Ele precisa mudar o tema, mas para isso depende que os dados
// sejam enviados via props desde o componente principal (App).
// Isso é o famoso PROP DRILLING.

interface BotaoTemaPDProps {
  temaEscuro: boolean;
  setTemaEscuro: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BotaoTemaPD = ({ temaEscuro, setTemaEscuro }: BotaoTemaPDProps) => {
  return (
    <Button
      title={temaEscuro ? "Mudar para Claro" : "Mudar para Escuro"}
      onPress={() => setTemaEscuro(!temaEscuro)} // alterna o tema
    />
  );
};