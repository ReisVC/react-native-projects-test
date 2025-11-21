import React from "react";
import { Button, View } from "react-native";

interface Props {
  onPress: () => void;
}

export default function BotaoEnviar({ onPress }: Props) {
  return (
    <View style={{ marginBottom: 20 }}>
      <Button title="Enviar Palpite" onPress={onPress} />
    </View>
  );
}
