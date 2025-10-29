import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useUser } from '../context/UserContext'

export default function TelaUser() {

    const {user, setUsuario} = useUser();

  return (
    <View>
      { user ? (
        <Text>Olá {user.nome}</Text>
      ) : 
      (<Text>Nenhum Usuário</Text>
      )}
      <Button title="Login como João" onPress={() => setUsuario({nome: "João"})}/>
      <Button title="Logout" onPress={() => setUsuario(null)}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {

    },
    texto: {

    }
})