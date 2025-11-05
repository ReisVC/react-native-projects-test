import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { HomeScreenProps } from '../interface/NavigationInterface';




export default function HomeScreen({ navigation }: HomeScreenProps) {

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Você já pode descansar meu filho!</Text>
      <Image style={styles.img} source={{ uri: 'https://i.pinimg.com/736x/55/48/ae/5548ae923c56829f9123cb8852ebc728.jpg' }} />
      <Button
        title="Ir para Apollo"
        onPress={() => navigation.navigate('Profile', { userId: 1111})}
      />
      <Button
        title="Ir para o Goat"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  img: {
    height: 400,
    width: 200,
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20
  },
  txt: {
    fontSize: 25,
    fontWeight: 800,
    fontStyle: 'italic',
  },
  container: {
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  }
})