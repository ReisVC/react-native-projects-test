import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ParamListBase } from '@react-navigation/native';


export default function HomeScreen(props: {navigation: any}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Ignore eles, venha para cá!</Text>
      <Image style={styles.img} source={{ uri: 'https://i8.amplience.net/i/naras/sean_diddy_combs.jpg.jpg'}}/>
       <Button
        title="Ir para Apollo"
        onPress={() => props.navigation.navigate('Profile')} 
      /> 
       <Button
        title="Ir para o Rocky"
        onPress={() => props.navigation.navigate('Home')} 
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
        marginBottom: 20,
        
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