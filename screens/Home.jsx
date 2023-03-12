import { View, 
  Text,ScrollView,
  Image ,StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Button

} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { COLORS, PADDING } from '../componens/constante';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'
import { FakeActivity } from './FakeActivity';

import { Entypo } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';


const Home = () => {

  let [fontLaoded] =useFonts({
    'poppin-bold':require('../assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('../assets/font/Poppins-Light.ttf'),
    'poppin-semibold':require('../assets/font/Poppins-SemiBold.ttf'),
  });
  if(!fontLaoded){
    return <AppLoading/>
  }
  return (
   <ScrollView>
   
  {/*debut du header*/}
    <View style={styles.headerstyle}>
      <Text style={styles.textUserName}>Trajet</Text>
      <Image source={require('../assets/images/man.png')} style={styles.imgeuser}/>
    </View>
    
  {/*fin header*/}
    {/*liste des activité*/}

     <FlatList horizontal={true} 
     showsHorizontalScrollIndicator={false}
     style={styles.FlatlistStyle}
     data={FakeActivity} 
     keyExtractor={item=>item.id}
      renderItem={({item})=>{
       return(
        <TouchableOpacity style={styles.FlatListItemsStyle}>
          <Image  source={{uri:`${item.img}`}} style={styles.cars}/>

          <Text style={styles.maintext}>{item.mainText}</Text>
          <View style={styles.cardhed}>
          <Text style={styles.subtext}>{item.subText}</Text>
          <Text style={styles.price}>{item.prix} &nbsp;&nbsp;&nbsp;&nbsp;<FontAwesome name="money" size={24} color="black" /></Text>
          </View>
          <Text style={styles.subtext2}>{item.marque}</Text>
        </TouchableOpacity>
       );
      }

      }
     />

       {/* fin liste des activité*/}
       <View>
        <Text style={styles.titre}>Rechercher un Trajet</Text>
  
       </View>
       <View style={styles.card}>
      <TextInput
        style={styles.input}
        placeholder="ville de depart"
     
      />
      <TextInput
        style={styles.input}
        placeholder="Ville d'arrivé"


      />
      <TextInput
        style={styles.input}
        placeholder="Heur de depart"

      
      />
       <TouchableOpacity style={styles.button} onPress={()=>{
    props.navigation.navigate("Home");
          }}>
        <Text style={styles.buttonText}>Rechecher</Text>
      </TouchableOpacity>
    </View>
    
   </ScrollView>
  )
}

export default Home
const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    margin:10
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
  },
  button: {
    backgroundColor: '#722df0',
    borderRadius: 6,
    width: '100%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  chauffeurInfo:{
  flexDirection:'column'
  },
  subtext2:{
    textAlign:'center',
    fontFamily:"poppin-light",
 

  },
  cardhed:{
    flexDirection:"row",
    justifyContent:"space-around",

    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical,
  },
  chauffeuImg:{
     width:80,
     height:80,
     borderRadius:80/2,
     marginRight:15,
  },
  chauffeurCard:{
     flex:1,
     elevation:5,
     backgroundColor:"white",
     paddingHorizontal:PADDING.horizontal,
     paddingVertical:PADDING.vertical,
     flexDirection:"row",
     marginBottom:20,
     borderRadius:15,


  },
   container:{
    paddingHorizontal:PADDING.horizontal,
    paddingVertical:PADDING.vertical,
    
   },
     headerstyle:{
   flexDirection:"row",
   justifyContent:"space-between",
   alignItems:"center",
   paddingHorizontal:PADDING.horizontal,
   paddingVertical:PADDING.vertical,
backgroundColor:"white",
      paddingTop:35,

     },
     imgeuser:{
       width:50,
       height:50,
       borderRadius:50/2,
     },
     textUserName:{
       fontWeight:"bold",
       fontSize:16,


     },
     FlatlistStyle:{
        paddingHorizontal:PADDING.horizontal,
        paddingVertical:PADDING.vertical,
     },
     FlatListItemsStyle:{
      flexDirection:"column",
      paddingHorizontal:15,
      paddingVertical:15,
      marginRight:15,
      backgroundColor:"white",
      elevation:1,
      color:"#33373a",
      borderRadius:10,
     },
     maintext:{
      fontSize:14,
      fontWeight:"blod",
      color:"#722df0",
      textAlign:'center',
      fontFamily:'poppin-bold'

     },
     subtext:{
      marginTop:1,
      marginRight:5,
      fontSize:12,
      fontWeight:"bold",
      
      fontFamily:"poppin-light",
      color:"tomato"

     },
     cars:{
 resizeMode:"cover",
      width: '100%',
      height: 100
    
     },
     price:{
      
      fontWeight:"bold"

     },
     titre:{
     
         
      color:"grey",
      textAlign:'center',
      fontFamily:'poppin-semibold'
     },
     chauffeur:{
       flexDirection:"row",
       justifyContent:"space-between",
       paddingHorizontal:PADDING.horizontal,
       paddingVertical:PADDING.vertical,
     },
     titreBtn:{
        color:"#722df0",
        fontWeight:"bold",
      
     }
});