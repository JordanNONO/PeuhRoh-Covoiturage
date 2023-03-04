import React from "react";
import { View, StyleSheet,Text } from "react-native";
import LottieView from "lottie-react-native";
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

class SplashScreen extends React.Component {
    
  componentDidMount() {
    this.animation.play();
    setTimeout(() => {
      this.props.navigation.navigate("OnboardingScreen");
    }, 4000);
  }

  render() {
 
    return (
        
      <View style={styles.animationContainer}>
      
        <LottieView
          ref={animation => {
            this.animation = animation;
          }}
          style={{
            width: 400,
            height: 400,
            backgroundColor: "#fff"
          }}
          source={require("../assets/images/dlivery-map.json")}
        />
       <Text style={{fontWeight:"bold",fontSize:30}}>PeuhRoh</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
});

export default SplashScreen;