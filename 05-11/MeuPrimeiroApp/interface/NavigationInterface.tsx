import { ParamListBase, RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export interface StackParamList extends ParamListBase {
  Home: undefined;
  About: undefined;
  Profile: { userId: number };
}

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}

export interface ProfileScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Profile'>;
  route: RouteProp<StackParamList, 'Profile'>
}