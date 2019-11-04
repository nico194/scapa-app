import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import MemoriesScreen from './screens/MemoriesScreen';
import SpeakScreen from './screens/SpeakScreen';
import RoutinesScreen from './screens/RoutinesScreen';

export default AppNavigator = createStackNavigator(
    {
        Login: LoginScreen,
        Home:  HomeScreen,
        Register: RegisterScreen,
        Memories: MemoriesScreen,
        Speak: SpeakScreen,
        Routines: RoutinesScreen
    },
    {
        initialRouteName: 'Speak'
    }
);