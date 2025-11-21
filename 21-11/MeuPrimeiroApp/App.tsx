import React, { useRef, useState } from "react";
import { View, StyleSheet } from "react-native";
import InputPalpite from "./components/InputPalpite";
import BotaoEnviar from "./components/BotaoEnviar";
import Mensagem from "./components/Mensagem";
import { Button } from "react-native";

export default function App() {
  // número secreto só é gerado 1 vez
  let numeroSecreto = useRef(Math.floor(Math.random() * 100) + 1);


  // contador interno de tentativas
  let tentativas = useRef(0);

  const [palpite, setPalpite] = useState("");
  const [mensagem, setMensagem] = useState("Tente adivinhar o número!");
  const [fim, setFim] = useState<boolean>(false)

  function reiniciarGame() {
    numeroSecreto = useRef(Math.floor(Math.random() * 100) + 1);
    tentativas = useRef(0);
    setPalpite("");
    setMensagem("Tente adivinhar o número!");
    setFim(false);
  }

  function retornaNumeroAleatorio(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  function verificarPalpite() {
    const numero = Number(palpite);
    tentativas.current++;

    if (!numero) {
      setMensagem("Digite um número válido!");
      return;
    }

    if (numero === numeroSecreto.current) {
      setMensagem(
        `Boa garai! O número era ${numero}. Só precisou de ${tentativas.current} tentativas.`
      );
      setFim(true)
    } else if (tentativas.current >= 10) {
      setMensagem(
        `Seu inútil! O número era ${numeroSecreto.current}.`
      );
      setFim(true)
    } else if (numero < numeroSecreto.current) {
      setMensagem("O número é MAIOR.");
    } else {
      setMensagem("O número é MENOR.");
    }

    setPalpite("");
  }

  return (
    <View style={styles.container}>
      <InputPalpite valor={palpite} setValor={setPalpite} />
      <BotaoEnviar onPress={verificarPalpite} />
      <Mensagem texto={mensagem} />
      { fim && <Button title="Reiniciar Jogo" onPress={() => reiniciarGame()}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
