import React, { useState } from 'react';
import { View, TextInput, StyleSheet ,Image,Text,Button,TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View>
      <Image source={require('../assets/images/login1.png')} style={{width:200,height:150}}/>
      <Text className="text-2xl" style={{fontFamily:'poppin-bold' ,paddingBottom:10,textAlign:"center",color:"#722df0"}}>crée un compte</Text>
      </View>
      <View style={styles.inputContainer}>
       
        <FontAwesome name="user" size={20} style={styles.icon} />
       
        <TextInput
          style={styles.input}
          placeholder="Nom"
         
  
        />
      </View>
      <View style={styles.inputContainer}>
       
       <FontAwesome name="user" size={20} style={styles.icon} />
      
       <TextInput
         style={styles.input}
         placeholder="prenom"
       
   
       />
     </View>
     <View style={styles.inputContainer}>
       
    
       <Entypo name="email" size={20} style={styles.icon} />
      
       <TextInput
         style={styles.input}
        placeholder="Adress mail"
   
    
       />
     </View>
      <View style={styles.inputContainer}>

       
        <MaterialCommunityIcons name="form-textbox-password" size={20} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      
      </View>
      <View style={styles.inputContainer}>

 
      <MaterialCommunityIcons name="form-textbox-password" size={20} style={styles.icon} />
<TextInput
  style={styles.input}
  placeholder="confirmé le meot de passe"
  secureTextEntry
  value={password}
  onChangeText={setPassword}
/>

</View>
      <View style={{}}>
            <TouchableOpacity style={styles.LoginBtn}  onPress={()=>{
    props.navigation.navigate("register");
          }}>
              <Text style={styles.loginBtnLbl}>Enregister</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
           style={{padding:10}}  >
              <Text style={styles.registerLbl}  onPress={()=>{
    props.navigation.navigate("login");
          }}>se connecter</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:-20,
    margin:20,
  
  },
  registerLbl: {color: '#722df0',
     fontFamily:'poppin-semibold'
},
  LoginBtn: {
    justifyContent:'center',
    backgroundColor: '#722df0',
    borderRadius: 10,

width:300,
marginLeft:20
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
    borderColor: '#722df0',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius:7,
  
 
  },
});

export default LoginScreen;
