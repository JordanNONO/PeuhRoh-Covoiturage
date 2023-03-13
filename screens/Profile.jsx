import { View, Text,Image,StatusBar,StyleSheet,ImageBackground} from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';
import { Feather } from '@expo/vector-icons';
import { COLORS, PADDING } from '../componens/constante';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';

const Profile = () => {

  let [fontLaoded] =useFonts({
    'poppin-bold':require('../assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('../assets/font/Poppins-Light.ttf'),
    'poppin-semibold':require('../assets/font/Poppins-SemiBold.ttf'),
  });
  if(!fontLaoded){
    return <AppLoading/>
  }

  return (
    <View style={{flex:1}}>
     
      <StatusBar backgroundColor='black'/>
      <Image source={{uri:'https://images.unsplash.com/photo-1678614033199-971226acb06a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'}}
          style={{flex:0.5,
         
      
          }}
          resizeMode={'cover'}
          />


      
      <View style={{flex:1,}}>
      <View style={{justifyContent:"center",alignItems:"center",zIndex:2}}>
      <Image source={{uri:"https://images.unsplash.com/photo-1678648113407-913545723db2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}}

        style={{height:100,width:100,borderRadius:100/2,
        borderWidth:3,
        borderColor:COLORS.green,
           position:"absolute",
           zIndex:2,
        }}

      />
      </View>
      <View style={{marginTop:50}}>
     <View style={{justifyContent:'center',alignItems:"center",padding:10,
       
     }}>
      <Text style={{fontFamily:'poppin-bold',fontSize:17}}>Maxime Feze</Text>
       <Text style={{fontFamily:'poppin-light'}}>L'argent dabord avant tout</Text>
     </View>
     <View style={{marginRight:50}}>
     <View style={{flexDirection:'row', justifyContent: 'center',padding:15}}>
     <Feather name="phone-call" size={24} color="black" style={{color:COLORS.orange}} />
     <View style={{flexDirection:'row', justifyContent: 'center',marginLeft:10,}}>
     <Text style={{fontFamily:'poppin-semibold',marginRight:20,}}>+23767989897</Text>
     </View>
   
     </View>
     <View style={{flexDirection:'row', justifyContent: 'center',padding:10}}>
          <MaterialIcons name="place" size={24} color="black" style={{marginLeft:20,color:COLORS.orange}} />
     <View style={{justifyContent:"center",marginLeft:10}}>
     <Text style={{fontFamily:'poppin-semibold'}}>Cameroun, Douala</Text>
     </View>
   
     
   
     </View>
     <View style={{flexDirection:'row', justifyContent: 'center',padding:10}}>
        
          <FontAwesome name="envelope" size={24} color="black" style={{marginLeft:20 ,color:COLORS.orange}} />
     <View style={{justifyContent:"center",marginLeft:10}}>
     <Text style={{fontFamily:'poppin-semibold'}}>Roicharles2@gmail.com</Text>
     </View>
   
     
   
     </View>
     </View>
   
      </View>
    </View>
    </View>
  )
}

export default Profile

