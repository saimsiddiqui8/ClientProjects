import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Favourite from './Favourite';
import Cart from './Cart';
import Home from './Home';
import {Image} from 'react-native';

const Main = () => {
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
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../constant/images/homefill.png')}
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
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../constant/images/cartfill.png')}
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
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <Image
                source={require('../constant/images/favfill.png')}
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
    </Tab.Navigator>
  );
};

export default Main;
