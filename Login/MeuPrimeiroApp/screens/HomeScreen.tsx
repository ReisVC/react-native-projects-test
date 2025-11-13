import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreenPropsBottom } from '../interfaces/NavigationTypes'

export default function HomeScreen({ navigation }: HomeScreenPropsBottom) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
          title="Editar perfil"
          onPress={() => navigation.navigate('Edit')} 
        />
    </View>
  )
}

const styles = StyleSheet.create({})