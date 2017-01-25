import React,{Component} from 'react'
import {View,AppRegistry,} from 'react-native'
import HelloWorld from './js/hello-world'
import MyImage from './js/my-image'


export default class Main extends Component{
  render(){
    return (
      <View>
      <MyImage src={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} style={{width: 193,height: 110}} />
      <HelloWorld />
      </View>
      )
  }
}

AppRegistry.registerComponent('HelloWorld',()=>Main)