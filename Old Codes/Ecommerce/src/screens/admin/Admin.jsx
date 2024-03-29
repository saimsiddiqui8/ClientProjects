import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Image } from 'react-native';
import { adminSettingIcon, cartfill, clipboard, homefill, plusSign } from '../../constant';
import AllProducts from './AllProducts';
import AddItem from './AddItem';
import AdminProfile from './AdminProfile';
import AdminOrders from './AdminOrders';

const Admin = () => {
    const Tab = createBottomTabNavigator();

    return (
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'orange',
                    tabBarInactiveTintColor: 'black',
                }}>
                <Tab.Screen
                    name="Home"
                    component={AllProducts}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={homefill}
                                    style={{
                                        height: 20,
                                        width: 20,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />

                <Tab.Screen
                    name="Add Items"
                    component={AddItem}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={plusSign}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />
                <Tab.Screen
                    name="Orders"
                    component={AdminOrders}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={clipboard}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />
                   <Tab.Screen
                    name="Profile"
                    component={AdminProfile}
                    options={{
                        tabBarIcon: ({ focused }) => {
                            return (
                                <Image
                                    source={adminSettingIcon}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? 'orange' : 'black',
                                    }}
                                />
                            );
                        },
                    }}
                />
            </Tab.Navigator>
    );
};

export default Admin;
