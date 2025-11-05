import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ProfileScreenProps } from '../interface/NavigationInterface'

export default function ProfileScreen( {navigation, route }: ProfileScreenProps) {
    let { userId } = route.params;

    if(!userId) {
        userId = 10;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Não é hora de descansar, fracote!</Text>
            <Text style={styles.txt}>ProfileScreen do Usuário de ID: {userId}</Text>
            <Image style={styles.img} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHlS6cVFeaVB8pBqERGI3-fBxeuqVs5aH7vxL6svNXnTau2m0bz5ya9suJSDEsU_EaunkWgXrQFFGZJV9NzFjyTycbHzCfCPdq4_S28g&s=10' }} />
            <Button
                title="Ir para Rocky"
                onPress={() => navigation.navigate('Home')}
            />
            <Button
                title="Ir para Goat"
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