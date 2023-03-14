import React, { useState } from 'react';
import { View, TextInput, StyleSheet ,Image,Text,Button,TouchableOpacity,StatusBar} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { COLORS, PADDING } from '../componens/constante';

import AppLoading from 'expo-app-loading';
const LoginScreen = (props) => {
  const [username, setUsername] = useState('');
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
      <StatusBar backgroundColor="#48ae5d"></StatusBar>
      <View style={{}}>
     <Text style={{fontFamily:'poppin-bold',fontSize:30,paddingTop:30}}>Salut ,</Text>
      <Text style={{fontFamily:'poppin-bold',fontSize:30}}>Bon retour !</Text>
      <Text style={{fontFamily:'poppin-light',fontSize:15,paddingBottom:90}}>veuille saisir votre adress email et votre mot de passe pour vous connecter!</Text>
      </View>
      <View style={styles.inputContainer}>
      
       
        <TextInput
          style={styles.input}
          placeholder="Nom d'utilisateur"
          value={username}
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputContainer}>

 
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      
      </View>
      <TouchableOpacity
           style={{padding:10}}  >
              <Text style={{textAlign:'right',fontFamily:'poppin-semibold',color:COLORS.orange,paddingBottom:0}}  onPress={()=>{
    props.navigation.navigate("register");
          }}>Mot de passe oublier</Text>
            </TouchableOpacity>
      <View style={{}}>
            <TouchableOpacity style={styles.LoginBtn}  onPress={()=>{
    props.navigation.navigate("register");
          }}>
              <Text style={styles.loginBtnLbl}>Se connecter</Text>
            </TouchableOpacity>
          </View>
     
          <TouchableOpacity style={{flexDirection:'row' ,justifyContent:'space-around',paddingTop:20}}>
          <Text  style={{fontFamily:'poppin-light'}}>Vous n'avez pas de compte?</Text>
              <Text style={{fontFamily:'poppin-semibold',color:COLORS.orange,paddingBottom:0}}  onPress={()=>{
    props.navigation.navigate("register");
          }}>S'inscrire</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    flex: 1,
 
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
