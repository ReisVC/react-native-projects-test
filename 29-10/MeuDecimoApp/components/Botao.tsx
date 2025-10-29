import { StyleSheet, Text, View, Button} from 'react-native'
import React from 'react'
import { useTema } from '../context/TemaContext'
import { Switch } from 'react-native';

export default function Botao() {
  const { temaEscuro, setTemaEscuro } = useTema();

  return (
    <Switch
    value={temaEscuro}
    onValueChange={setTemaEscuro}
    trackColor={{ false: '#9c9c9cff', true: '#c1dff5ff'}}
    thumbColor={temaEscuro ? '#0c75e4ff' : '#595959ff'}
    />
  )
}

const styles = StyleSheet.create({})