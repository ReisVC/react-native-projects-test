import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './screens/ProfileScreen';
import AboutScreen from './screens/AboutScreen';
import { BottomTabParamList, StackParamList } from './interface/NavigationInterface';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


// const Stack = createNativeStackNavigator<StackParamList>();
// const Tab = createBottomTabNavigator<BottomTabParamList>()
const TopTab = createMaterialTopTabNavigator();


export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1}}>
        <NavigationContainer>
          <TopTab.Navigator>
            <TopTab.Screen name="Home" component={HomeScreen} />
            <TopTab.Screen name="About" component={AboutScreen} />
          </TopTab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           let iconName;
//           if(route.name === 'Home') iconName = "home-outline"
//           if(route.name === 'About') iconName = "help-outline"
//           return <Ionicons name={iconName} size={size} color={color} />
//         },
//         tabBarActiveTintColor: "blue",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: { height: 60 },
//         tabBarLabelStyle: { fontSize: 14}
//       })}
//       >
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="About" component={AboutScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Profile" component={ProfileScreen}/>
//         <Stack.Screen name="About" component={AboutScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


// ABCDEFGHIJKLMNOPQRSTUV