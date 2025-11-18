import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Definindo a interface para o tipo de tema
interface User {
    nome: string,
    idade: string
}

export default function App() {
    const [user, setUser] = useState<User>({ nome: 'Vitor', idade: '22' })

    // Carregar tema do AsyncStorage ao iniciar
    useEffect(() => {
        const carregarUser = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('@user');

                if (jsonValue) setUser(JSON.parse(jsonValue));
            } catch (error) {
                console.log('Erro ao carregar tema:', error);
            }
        };
        carregarUser();
    }, []);

    const salvar = async () => {
        try {
            await AsyncStorage.setItem('@user', JSON.stringify(user));
            Alert.alert("Usuário salvo com sucesso")
        } catch (error) {
            console.log('Erro ao salvar usuário:', error);
        }
    }

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ display: 'flex', fontSize: 20, fontWeight: 800, marginTop: 30, textAlign: 'center' }}>
                        Informações pessoais
                    </Text>

                    <Text style={{ fontSize: 22, fontWeight: 800, fontStyle: 'italic', marginTop: 20 }}>Nome:</Text>
                    <TextInput style={{ backgroundColor: '#87d9f3ff', width: 300, borderColor: 'black', borderWidth: 2, borderRadius: 10, marginBottom: 20, marginTop: 12, textAlign: 'center', fontWeight: 700 }}
                        value={user.nome}
                        
                        onChangeText={(text) => setUser(prev => ({ ...prev, nome: text }))}>
                    </TextInput>

                    <Text style={{ fontSize: 22, fontWeight: 800, fontStyle: 'italic', marginTop: 20 }}>Idade:</Text>
                    <TextInput style={{ backgroundColor: '#87d9f3ff', width: 300, borderColor: 'black', borderWidth: 2, borderRadius: 10, marginBottom: 20, marginTop: 12, textAlign: 'center', fontWeight: 700 }}
                        value={user.idade}
                        onChangeText={(text) => setUser(prev => ({ ...prev, idade: text }))}>
                    </TextInput>

                    <Button title="Salvar" onPress={salvar} />
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    );
}