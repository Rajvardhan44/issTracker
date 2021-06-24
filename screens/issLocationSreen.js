import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ImageBackground, Image, StatusBar,Platform } from 'react-native';
import axios from 'axios';
import MapView,{Marker} from 'react-native-maps';

export default class IssLocationScreen extends Component {
constructor(){
  super()
  this.state={
    location:{}

  }
}

componentDidMount(){

}

getIssLocation=()=>{
 axios
  .get("https://api.wheretheiss.at/v1/satellites/25544").then(response=>{
    this.setState({
      location:response.data
    })
    .catch(error=>{
      alert(error.message)
    })
  })
}

  render(){
    return (
      <View style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea}/>
      <ImageBackground source = {require("../assets/iss_bg.jpg")} style={styles.backgroundImage}>
      <View style={styles.titleBar}><Text style={styles.titleText}>Iss Location</Text></View>
      <View style={styles.mapContainer}>
        <MapView style={styles.map}
        region={{
          latitude:this.state.location.latitude,
          longitude:this.state.location.longitude,
          latitudeDelta:100,
          longitudeDelta:100,
        }}>
          <Marker 
          coordinate={{latitude:this.state.location.latitude,
            longitude:this.state.location.longitude}}> 
            <Image source = {require("../assets/iss_icon.png")}></Image></Marker>
        </MapView>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>latitude:{this.state.location.latitude}</Text>
        <Text style={styles.infoText}>longitude:{this.state.location.longitude}</Text>
        <Text style={styles.infoText}>velocity:{this.state.location.velocity}</Text>
        <Text style={styles.infoText}>altitude:{this.state.location.altitude}</Text>
      </View>
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

  infoContainer:{
    flex:0.2,
    backgroundColor:'white',
    marginTop:-10,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:30
  },

  infoText:{
    fontSize:30,
    color:'#000000',
    fontWeight:'bold'
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

  mapContainer:{
  flex:0.6
  },

  map:{
    width:'100%',
    height:'100%',
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