import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EditScreenPropsBottom } from '../interfaces/NavigationTypes'

export default function EditProfileScreen({ navigation }: EditScreenPropsBottom) {
  return (
    <View>
      <Text>EditProfileScreen</Text>
      <Button
                title="Voltar para home"
                onPress={() => navigation.goBack()} 
              />
    </View>
  )
}

const styles = StyleSheet.create({})