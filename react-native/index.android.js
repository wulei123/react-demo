import React,{Component} from 'react'
import {ScrollView,Text,View,AppRegistry,TextInput} from 'react-native'
import HelloWorld from './js/hello-world'
import MyImage from './js/my-image'
import MyTextInput from './js/my-input'

export default class Main extends Component{
  render(){
    return (
      // <View style={{flex:1,flexDirection:'column',backgroundColor:'powderblue',alignItems:'center'}}>
      <ScrollView>
      <View style={{flex:4}}>
        <MyImage src={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} style={{width: 300,height: 170}} />
        <MyTextInput />
        <HelloWorld />
      </View>
          <View style={{flex:1,flexDirection:'row',backgroundColor:'skyblue'}}>
            <View style={{flex:1,backgroundColor:'red'}}></View>
            <View style={{flex:1,backgroundColor:'green'}}></View>
          </View>
        <View style={{flex:2,backgroundColor:'steelblue',flexDirection:'row'}}>
            <View style={{height:200,width:200,backgroundColor:'green'}}></View>
            <View style={{height:100,width:100,backgroundColor:'red'}}></View>
        </View>
          <Text style={{fontSize:40}}>ScrollView</Text>
          <Text style={{fontSize:40}}>ScrollView</Text>
          <Text style={{fontSize:40}}>ScrollView</Text>
          <Text style={{fontSize:40}}>ScrollView</Text>
        </ScrollView>
      // </View>
      )
  }
}

AppRegistry.registerComponent('HelloWorld',()=>Main)