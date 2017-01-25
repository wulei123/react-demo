import React,{Component} from 'react'
import {View,AppRegistry,} from 'react-native'
import HelloWorld from './js/hello-world'
import MyImage from './js/my-image'

export default class Main extends Component{
  render(){
    return (
      <View style={{flex:1,backgroundColor:'powderblue'}}>
      <View style={{flex:4}}>
        <MyImage src={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} style={{width: 193,height: 110}} />
        <HelloWorld />
      </View>
          <View style={{flex:1,backgroundColor:'skyblue'}}></View>
      <View style={{flex:2,backgroundColor:'steelblue'}}></View>
      </View>
      )
  }
}

AppRegistry.registerComponent('HelloWorld',()=>Main)