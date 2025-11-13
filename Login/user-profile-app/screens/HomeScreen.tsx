import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { User } from '../interfaces/UserInterface';
import { HomeTabScreenProps, RootStackParamList } from '../interfaces/NavigationTypes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export default function HomeScreen() {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const route = useRoute<RouteProp<RootStackParamList, "Tabs">>();

  const [user, setUser] = useState<User>({
    id: 1,
    name: "Vitor",
    email: "vitor.reisvc@gmail.com",
    city: "São Leopoldo",
    photo: "https://www1.folha.uol.com.br/fsp/images/i1607200603.jpg"
  })

  useEffect(() => {
    if(route.params?.user) {
      setUser(route.params.user)
    }
  }, [route.params?.user])

  return (
    <View style={styles.container}>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Name: </Text>
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Email: </Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>City: </Text>
        <Text style={styles.city}>{user.city}</Text>
      </View>

      <View style={styles.sectionName}>
        <Text style={styles.label}>Photo: </Text>
        <Image source={{ uri: user.photo }} style={{ height: 200, width: 200, marginTop: 20, borderWidth: 2, borderRadius: 10, borderColor: '#f7c58dff', marginBottom: 20 }} />
      </View>

      <Button
        title="Editar"
        onPress={() =>
          navigation.navigate("Profile", {
            user
          })
        }

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
    color: '#f7c58dff'
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