import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import SettingScreen from './screens/SettingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './navigation/TabNavigator';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from './navigation/StackNavigator';





export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <NavigationContainer>
           <StackNavigator/>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );

}

const styles = StyleSheet.create({
  container: {

  }
});
