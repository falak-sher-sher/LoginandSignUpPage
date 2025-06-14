import {  NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import WelcomScreen from '../screens/WelcomScreen';
const Stack =createNativeStackNavigator();
export default function AppNavigation(){
    return (
        <NavigationContainer >
        <Stack.Navigator initialRouteName='Welcome'
        screenOptions={{headerShown:false}}
        >
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShone:false}}/>
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShone:false}}/>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShone:false}}/>
            <Stack.Screen name='Welcome' component={WelcomScreen} options={{headerShone:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
    
}