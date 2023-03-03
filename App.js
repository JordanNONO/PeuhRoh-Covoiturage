import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TailwindProvider } from "tailwindcss-react-native";
import { Home, OnboardingScreen } from "./screens";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <TailwindProvider>
   <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

