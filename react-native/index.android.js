import React,{Component} from 'react'
import {View,Text,AppRegistry,StyleSheet} from 'react-native'

export default class HelloWorld extends Component{
  render(){
    return (
      <View>
        <Text style={styles.helloworld}>HelloWorld</Text>
      </View>
      )
  }
}

const styles = StyleSheet.create({
  helloworld:{
    textAlign:'center',
    fontSize : 40
  }
})
AppRegistry.registerComponent('HelloWorld',()=>HelloWorld)