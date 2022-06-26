import { Platform, View } from 'react-native';
import Constants from 'expo-constants';
import RoomsScreen from './RoomsScreen';
import HomeScreen from './HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AmenitiesScreen from './AmenitiesScreen';
import ContactScreen from './ContactScreen';
import ReservationScreen from './ReservationScreen';

const Drawer = createDrawerNavigator();
const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: { backgroundColor: '#000000' }
};const HomeNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ title: 'Home' }}
            />
        </Stack.Navigator>
    );
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Rooms'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Rooms'
                component={RoomsScreen}
                options={{ title: 'Accomodations' }}
            />
            
           
        </Stack.Navigator>
    );
};
const AmenitiesNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Amenities'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Amenities'
                component={AmenitiesScreen}
                options={{ title: 'Amenities' }}
            />
            
           
        </Stack.Navigator>
    );
};
const ContactNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Contact'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Contact'
                component={ContactScreen}
                options={{ title: 'Contact' }}
            />
            
           
        </Stack.Navigator>
    );
};
const ReservationNavigator = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator
            initialRouteName='Reservation'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Reservation'
                component={ReservationScreen}
                options={{ title: 'Reservation' }}
            />
            
           
        </Stack.Navigator>
    );
};

const Main = () => {
    return (
        <View
            style={{
                flex: 1,
                paddingTop:
                    Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
            }}
        >
            <Drawer.Navigator
                initialRouteName='Home'
                drawerStyle={{ backgroundColor: '#fff' }}
            >
                <Drawer.Screen
                    name='Home'
                    component={HomeNavigator}
                    options={{ title: 'Home' }}
                />
                <Drawer.Screen
                    name='Directory'
                    component={DirectoryNavigator}
                    options={{ title: 'Accomodations' }}
                />
                <Drawer.Screen
                    name='Amenities'
                    component={AmenitiesNavigator}
                    options={{ title: 'Amenities' }}
                />
                <Drawer.Screen
                    name='Contact'
                    component={ContactNavigator}
                    options={{ title: 'Contact' }}
                />
                <Drawer.Screen
                    name='Reservation'
                    component={ReservationNavigator}
                    options={{ title: 'Reservation' }}
                />
            </Drawer.Navigator>
        </View>
    );
};

export default Main;