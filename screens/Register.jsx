import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import LottieView from "lottie-react-native";
import AppLoading from 'expo-app-loading';
const Register = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
   
  let [fontLaoded] =useFonts({
    'poppin-bold':require('../assets/font/Poppins-Bold.ttf'),
    'poppin-light':require('../assets/font/Poppins-Light.ttf'),
    'poppin-semibold':require('../assets/font/Poppins-SemiBold.ttf'),
  });
  if(!fontLaoded){
    return <AppLoading/>
  }
  }
  

  return (
    <View style={styles.container}>
        <View style={styles.animationContainer}>
      
      <LottieView
        ref={animation => {
          this.animation = animation;
         // this.animation.play();
      
        }}
        style={{
          width: 400,
          height: 200,
          backgroundColor: '#F9F9F9',
        }}
        source={{uri:'https://assets5.lottiefiles.com/packages/lf20_nk5g0wbx.json'}}
        
      />
  
    </View>
      <Text style={styles.title}>S'inscrire</Text>
      <TextInput
        style={styles.input}
        placeholder="Nom"
   
    
      />
        <TextInput
        style={styles.input}
        placeholder="Prenom"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Adresse e-mail"

     
      />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
        <TextInput
        style={styles.input}
        placeholder="Confirmé le mot de passe"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Enregistrer</Text>
      </TouchableOpacity>
      <TouchableOpacity
           style={{padding:10}}  >
              <Text style={styles.registerLbl}  onPress={()=>{
    props.navigation.navigate("login");
          }}>Se connecter ?</Text>
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
  },
  registerLbl: {color: '#722df0',
  fontFamily:'poppin-semibold'
},
animationContainer: {
  backgroundColor: "#fff",


},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    fontFamily:'poppin-bold' ,color:"#722df0"
  },
  input: {
    width: '80%',
    height: 48,
    borderWidth: 1,
    borderColor: '#722df0',
    borderRadius: 6,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#722df0',
    borderRadius: 6,
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Register;
