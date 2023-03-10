import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
 import { createAppContainer } from "react-navigation";
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { Ionicons } from '@expo/vector-icons';
 import { useFonts } from 'expo-font';
 import AppLoading from 'expo-app-loading';
 import { FontAwesome5 } from '@expo/vector-icons';
 import { FontAwesome } from '@expo/vector-icons';
import { TailwindProvider } from "tailwindcss-react-native";
import { Home, OnboardingScreen, SplashScreen,Login,Register ,Trajet,parametre,Profile} from "./screens";
const Stack = createNativeStackNavigator();
const BottonTabs = createBottomTabNavigator();

export default function App() {
  let [fontLaoded] =useFonts({
    'poppin-bold':require('./assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('./assets/font/Poppins-Light.ttf'),
   
  });
  if(!fontLaoded){
    return <AppLoading/>
  }
  function MyButtonTabs(){
    return <BottonTabs.Navigator 
   
        options={{
          color:'red'
        }} 
     
     >
   
        <BottonTabs.Screen name="Home" component={Home}  options={{ tabBarIcon:(props) =>
        <Ionicons name="ios-home-sharp" size={24} color="black" />,
          headerShown:false,
          tabBarLabelStyle:{
          color:'black',
          fontSize:12,
        fontWeight:'bold'
        }
        }} />
         
        
    
                
    <BottonTabs.Screen name="profile" component={Profile} options={{  tabBarIcon:(props)=><FontAwesome name="user-circle" size={24} color="black" />, 
       tabBarLabelStyle:{
        color:'black',
        fontFamily:'poppin-light',
        fontSize:12,
        fontWeight:'bold'
       }
    }}/>

    <BottonTabs.Screen name="parametre" component={parametre}   options={{  tabBarIcon:(props) =>
    <Ionicons name="settings-sharp" size={24} color="black"/>,
    tabBarLabelStyle:{
        color:'black',
        fontFamily:'poppin-light',
        fontSize:12,
        fontWeight:'bold'
       }
    }} />
    <BottonTabs.Screen name="Trajet" component={Trajet}   options={{  tabBarIcon:(props) =>
    <FontAwesome5 name="route" size={24} color="black" />,
    
    tabBarLabelStyle:{
        color:'black',
        fontFamily:'poppin-light',
        fontSize:12,
        fontWeight:'bold'
       }
    
    }} />
    
 
    </BottonTabs.Navigator>
    
  }
  return (
    <TailwindProvider>
   <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="splascreen" component={SplashScreen}  options={{headerShown:false}}/>
  
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{headerShown:false}} />
      <Stack.Screen name="login" component={Login} options={{headerShown:true}} />
      <Stack.Screen name="Home" component={ MyButtonTabs}  options={{headerShown:false}}/>

      <Stack.Screen name="register" component={Register} options={{headerShown:true}} />
    
  
 
     
      
      </Stack.Navigator>
    </NavigationContainer>
    </TailwindProvider>
  );
}

