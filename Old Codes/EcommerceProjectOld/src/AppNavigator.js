import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import Cart from "./screens/Cart";
import Favourite from "./screens/Favourite";
import SingleProduct from "./screens/SingleProduct";
import Main from "./screens/Main";
import Checkout from "./screens/Checkout";
import Completed from "./screens/Completed";
import LogIn from "./screens/Login";
import SignUp from "./screens/Signup";

const AppNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer >
      <Stack.Navigator >
       <Stack.Screen name='Login' component={LogIn} options={{ headerShown: false }} />
       <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} />
        <Stack.Screen name='Main' component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Favourite" component={Favourite} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        <Stack.Screen name="Checkout" component={Checkout} options={{ headerShown: false }} />
        <Stack.Screen name="Completed" component={Completed} options={{ headerShown: false }} />
        <Stack.Screen name="SingleProduct" component={SingleProduct} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNavigator