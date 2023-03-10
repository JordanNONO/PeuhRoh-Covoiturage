import { View, Text,StyleSheet,SafeAreaView,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react'

export default class Screen extends React.Component{
    render(){
        return(
            <View>
               <SafeAreaView style={{flex:1}} >
                 <TouchableOpacity style={{ alignItems:"flex-end",margin:16}} onPress={this.props.navigation.openDrawer}>
                   <FontAwesome name="bars" size={24} color="black" />
                 </TouchableOpacity>
                 <view style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text style={styles.text}>{this.props.name} Screen</Text>
                 </view>
               </SafeAreaView>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#fff"
    },
    text:{
        color:"#161924",
        fontSize:20,
        fontWeight:"500",

    }
})