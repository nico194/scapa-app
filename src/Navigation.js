import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen'

export default AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Home:  HomeScreen,
        Register: RegisterScreen
    },
    {
        initialRouteName: 'Login'
    }
);