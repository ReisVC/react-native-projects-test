import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/UserInterface';
import { EditProfileScreenProps } from '../interfaces/NavigationTypes';

export default function EditProfileScreen({ route, navigation }: EditProfileScreenProps) {

  const [user, setUser] = useState<User>(route.params.user)


  const handleSave = () => {
    console.log(user)
    navigation.navigate("Tab", { screen: "Home", params: { user } } as never)
  }

  return (
    <View style={styles.container}>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Name: </Text>
        <TextInput
          placeholder="Enter text here"
          value={user.name}
          onChangeText={(text) => setUser({ ...user, name: text })}
          style={styles.name}
        />
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Email: </Text>
        <TextInput
          placeholder="Enter text here"
          value={user.email}
          style={styles.name}
          onChangeText={(text) => setUser({ ...user, email: text })}

        />
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>City: </Text>
        <TextInput
          placeholder="Enter text here"
          value={user.city}
          style={styles.name}
          onChangeText={(text) => setUser({ ...user, city: text })}
        />
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Photo: </Text>
        <TextInput
          placeholder="Enter text here"
          value={user.photo}
          onChangeText={(text) => setUser({ ...user, photo: text })}
          style={styles.name}
        />
      </View>

      <Button
        title='Salvar'
        onPress={handleSave}
      ></Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#469ff1ff',
    textAlign: 'center',
    marginTop: -40
  },
  name: {
    fontSize: 28,
    fontWeight: 900,
    fontStyle: 'italic',
    color: '#f7c58dff',
    backgroundColor: 'white',
    width: 300,
    borderRadius: 10,
    marginTop: 10
  },
  email: {
    fontSize: 28,
    fontWeight: 900,
    fontStyle: 'italic',
    color: '#f7c58dff'
  },
  city: {
    fontSize: 28,
    fontWeight: 900,
    fontStyle: 'italic',
    color: '#f7c58dff'
  },
  label: {
    fontSize: 28,
    fontWeight: 900,
    fontStyle: 'italic',
    color: '#ffffffff'
  },
  sectionName: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 20
  }
})