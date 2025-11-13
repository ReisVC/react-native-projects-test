import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { createMaterialTopTabNavigator, MaterialTopTabNavigationProp } from '@react-navigation/material-top-tabs';


export interface StackParamList extends ParamListBase {
  Home: undefined;
  About: undefined;
  Profile: { userId: number };
}

// export interface HomeScreenProps {
//   navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
// }

// export interface ProfileScreenProps {
//   navigation: NativeStackNavigationProp<StackParamList, 'Profile'>;
//   route: RouteProp<StackParamList, 'Profile'>
// }

// TAB ----------------------------------------------------------

export interface BottomTabParamList extends ParamListBase {
  Home: undefined;
  Edit: undefined;
}

export interface HomeScreenPropsBottom {
  navigation: BottomTabNavigationProp<BottomTabParamList, 'Home'>;
}

export interface EditScreenPropsBottom {
  navigation: BottomTabNavigationProp<BottomTabParamList, 'Edit'>;
}

// TOP -------------------------------------------------------

export interface TopTabsParamList extends ParamListBase {
  Home: undefined;
  About: undefined;
}

// export interface HomeScreenPropsTop {
//   navigation: MaterialTopTabNavigationProp<TopTabsParamList, 'Home'>;
// }

// export interface AboutScreenPropsTop {
//   navigation: MaterialTopTabNavigationProp<TopTabsParamList, 'About'>;
// }