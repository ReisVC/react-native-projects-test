import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EditProfileScreen from '../screens/EditProfileScreen';
import TabNavigator from './TabNavigator';
import { RootStackParamList } from '../interfaces/NavigationTypes';

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={EditProfileScreen} />
            <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})