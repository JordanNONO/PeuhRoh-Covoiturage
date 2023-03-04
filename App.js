import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TailwindProvider } from "tailwindcss-react-native";
import { Home, OnboardingScreen, SplashScreen } from "./screens";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
   <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="splascreen" component={SplashScreen}  options={{headerShown:false}}/>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home}  options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

