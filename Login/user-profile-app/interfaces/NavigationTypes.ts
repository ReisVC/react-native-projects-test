import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { User } from "./UserInterface";
import { StackNavigationProp } from "@react-navigation/stack";
// import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';


export interface RootTabParamList extends ParamListBase {
  Home: {user?: User};
  Settings: undefined
}

export interface RootStackParamList extends ParamListBase {
  Tabs: { user?: User };
  Profile: {user: User}
}

export interface HomeTabScreenProps {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Home'>; 
}

export interface SettingsTabScreenProps {
    navigation: BottomTabNavigationProp<RootTabParamList, 'Settings'>;
}

export interface EditProfileScreenProps {
    navigation: StackNavigationProp<RootStackParamList, "Profile">;
    route: { params: { user: User }}
}
