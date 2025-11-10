import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreenProps, HomeScreenPropsBottom } from '../interfaces/NavigationTypes'

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1 }}>
      <Text>HomeScreen</Text>
      <Button
          title="Editar perfil"
          onPress={() => navigation.navigate('Profile')} 
        />
    </View>
  )
}

const styles = StyleSheet.create({

})