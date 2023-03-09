import { useNavigation } from '@react-navigation/native';
import React from 'react'

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { View, Text,Image } from 'react-native'

import Onboarding from 'react-native-onboarding-swiper';


const OnboardingScreen = () => {
  
  let [fontLaoded] =useFonts({
    'poppin-bold':require('../assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('../assets/font/Poppins-Light.ttf'),
    'poppin-semibold':require('../assets/font/Poppins-SemiBold.ttf'),
  });
  if(!fontLaoded){
    return <AppLoading/>
  }
  const navigation = useNavigation()
 
  const DotComponent = ({ selected }) => {

    return (
      <View
        className={`w-4 h-4 mx-1 flex items-center justify-center rounded-full ${
          selected ? "border border-blue-600" : ""
        }  p-2`}
      >
        <View
          className={`w-2 h-2 ${
            selected ? "bg-blue-700" : "bg-blue-300"
          } rounded-full`}
        ></View>
      </View>
    );
  };
  return (
    <Onboarding
    onSkip={() => navigation.replace("login")}
    onDone={() => navigation.replace("login")}
    DotComponent={DotComponent}
    nextLabel={"suivant"}
    skipLabel={"passer"}
     pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/images/car.gif')} style={{width:450,height:300}} />,
      title: <Text className="text-2xl" style={{fontFamily:'poppin-bold'}}>Trouvez le trajet ideal</Text>,
      subtitle: <Text style={{fontFamily:'poppin-light'}}>Done with React Native Onboarding Swiper</Text>,
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/images/car2.gif')} style={{width:400,height:300}}/>,
      title: <Text className="text-2xl" style={{fontFamily:'poppin-bold'}}>Voyage rapide</Text> ,
      subtitle: <Text style={{fontFamily:'poppin-light'}}>Done with React Native Onboarding Swiper</Text>,
    },
    {
      backgroundColor: '#fff',
      image: <Image source={require('../assets/images/world.png')} />,
      title: <Text className="text-2xl" style={{fontFamily:'poppin-bold'}}>expert en conduite</Text>,
      subtitle: <Text style={{fontFamily:'poppin-light'}}>Done with React Native Onboarding Swiper</Text>,
    },
 
 
  ]}
/>
  )
}

export default OnboardingScreen