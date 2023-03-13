import React, { useState ,} from 'react';
import { View, TextInput, StyleSheet ,Image,Text,Button,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


import { useFonts } from 'expo-font';
import { COLORS, PADDING } from '../componens/constante';

import AppLoading from 'expo-app-loading';
const LoginScreen = (props) => {
  const [userFullname, setUserFullname] = useState('');
  const [email, setEmail]=useState('');
  const [tel,setTel]=useState('');
  const [password, setPassword] = useState('');
 
  let [fontLaoded] =useFonts({
    'poppin-bold':require('../assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('../assets/font/Poppins-Light.ttf'),
    'poppin-semibold':require('../assets/font/Poppins-SemiBold.ttf'),
  });
  if(!fontLaoded){
    return <AppLoading/>
  }



  return (
  
    
    <View style={styles.container}>
      <View style={{}}>
     <Text style={{fontFamily:'poppin-semibold',fontSize:25,paddingBottom:40,paddingTop:20,color:COLORS.orange}}>veuillez remplire vos information pour vous inscrire</Text>

  
      </View>
      <View style={styles.inputContainer}>
      
       
        <TextInput
          style={styles.input}
          placeholder="Nom complet"
          value={userFullname}
          onChangeText={(userFullname)=>setUserFullname(userFullname)}
        />
      </View>
      <View style={styles.inputContainer}>
      
       
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
          onChangeText={(email)=>setEmail(email)}
      />
    </View>

      <View style={styles.inputContainer}>

 
        <TextInput
          style={styles.input}
          placeholder="Numero de telephone"
          value={tel}
          onChangeText={(tel)=>setTel(tel)}
     
        />
      
      </View>
 
      <View style={styles.inputContainer}>

 
 <TextInput
  style={styles.input}
  placeholder="Mot de passe"
  secureTextEntry
  value={password}
  onChangeText={(password)=>setPassword(password)}
/>

</View>

      <View style={{}}>
            <TouchableOpacity style={styles.LoginBtn}  onPress={()=>{
    props.navigation.navigate("Home");
          }}>
              <Text style={styles.loginBtnLbl}>S'inscrire</Text>
            </TouchableOpacity>
          </View>
     
          <TouchableOpacity style={{flexDirection:'row' ,justifyContent:'space-around',paddingTop:20}}>
          <Text  style={{fontFamily:'poppin-light'}}>vous avez deja un compte?&nbsp;&nbsp;</Text>
              <Text style={{fontFamily:'poppin-semibold',color:COLORS.orange,paddingBottom:0}}  onPress={()=>{
    props.navigation.navigate("register");
          }}>Se connecter</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
   
    margin:20,
  },
  registerLbl: {color: '#722df0',
     fontFamily:'poppin-semibold'
},
  LoginBtn: {
    justifyContent:'center',
    backgroundColor:COLORS.main,
    borderRadius: 10,

width:360,

  },
  loginBtnLbl: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily:'poppin-bold',

 
    color: '#fff',
    paddingVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingBottom:20
   
  },
  icon: {
    marginRight: 10,
  
  },
  ButtonStyle:{
    padding:14,
    backgroundColor:"#e3E3E3",
     flex:1,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:30,
    margin:6,
    fontFamily:'poppin-bold',
  
    
   },
  input: {
    flex: 1,
    height: 50,
  backgroundColor:COLORS.grey,

    paddingLeft: 10,
    borderRadius:7,
  
 
  },
});

export default LoginScreen;
