import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
//import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import EditProfileScreen from './screens/EditProfileScreen';
import { BottomTabParamList } from './interfaces/NavigationTypes';
import SettingScreen from './screens/SettingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './screens/TabNavigator';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator<BottomTabParamList>();



export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Tab" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Profile" component={EditProfileScreen} />
            <Stack.Screen name="Tab" component={TabNavigator} options={{ headerShown: false }}/>
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>

  );

}

const styles = StyleSheet.create({
  container: {

  }
});
