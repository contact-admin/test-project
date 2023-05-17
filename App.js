import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen';
import productosScreen from './Screens/productosScreen';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="productosScreen" component={productosScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

