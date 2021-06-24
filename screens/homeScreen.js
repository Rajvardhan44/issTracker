import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
render(){
    return (
        <View style={styles.container}>
          <SafeAreaView style={styles.androidSafeArea}/>
          <ImageBackground source = {require("../assets/bg_image.png")} style={styles.backgroundImage}>
          <View style={styles.titleBar}><Text style={styles.titleText}>Iss Tracker App</Text></View>
          <TouchableOpacity style={styles.rootCard}
          onPress={()=>{
            this.props.navigation.navigate('IssLocation')
          }}>
            <Text style={styles.rootText}>Iss Location</Text>
            <Text style={styles.knowMore}>{'Know More -->'}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image source = {require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity> 

            <TouchableOpacity style={styles.rootCard}
             onPress={()=>{
            this.props.navigation.navigate('Meteor')
          }}>
            <Text style={styles.rootText}>Meteor</Text>
            <Text style={styles.knowMore}>{'Know More -->'}</Text>
            <Text style={styles.bgDigit}>2</Text>
            <Image source = {require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
            </TouchableOpacity>
            </ImageBackground>                     
        </View>    
      );
 }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  },

  knowMore:{
    paddingLeft:30,
    color:'red',
    fontSize:15
  },

  bgDigit:{
    position:'absolute',
    color:'rgba(183,183,183,0.5)',
    fontSize:150,
    right:20,
    bottom:-15,
  },

  iconImage:{
    position:'absolute',
    height:200,
    width:200,
    resizeMode:'contain',
    right:20,
    top:-80
  },

  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },

  rootCard:{
    flex:0.25,
    marginLeft:50,
    marginTop:50,
    marginRight:50,
    borderRadius:30,
    backgroundColor:'#ffffff',
  //  alignItems:'center'
  },

  rootText:{
    fontSize:35,
    fontWeight:'bold',
    color:'black',
    marginTop:75,
    paddingLeft:30,
  },

  titleText:{
    fontSize:40,
    fontWeight:'bold',
    color:'#000000',
  },
  titleBar:{
    justifyContent:'center',
    flex:0.15,
    alignItems:'center'
  },
  androidSafeArea:{
    marginTop:Platform.OS==="android" ? StatusBar.currentHeight : 0
  },
   
   
 })