import React,{Component} from 'react'
import {ScrollView,Text,View,AppRegistry,Navigator,TextInput} from 'react-native'
import HelloWorld from './js/hello-world'
import MyImage from './js/my-image'
import MyTextInput from './js/my-input'
import NameList from './js/name-list'
import MyScene from './js/my-scene'

export default class Main extends Component{
  render(){
    return (
      // <View style={{flex:1,flexDirection:'column',backgroundColor:'powderblue',alignItems:'center'}}>
      // <ScrollView>
      // {<View style={{flex:4}}>
      //   <MyImage src={'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'} style={{width: 300,height: 170}} />
      //   <MyTextInput />
      //   <HelloWorld />
      // </View>
      //     <View style={{flex:1,flexDirection:'row',backgroundColor:'skyblue'}}>
      //       <View style={{flex:1,backgroundColor:'red'}}></View>
      //       <View style={{flex:1,backgroundColor:'green'}}></View>
      //     </View>
      //   <View style={{flex:2,backgroundColor:'steelblue',flexDirection:'row'}}>
      //       <View style={{height:200,width:200,backgroundColor:'green'}}></View>
      //       <View style={{height:100,width:100,backgroundColor:'red'}}></View>
      //   </View>
      //     <Text style={{fontSize:40}}>ScrollView</Text>
      //     <Text style={{fontSize:40}}>ScrollView</Text>
      //     <Text style={{fontSize:40}}>ScrollView</Text>
      //     <Text style={{fontSize:40}}>ScrollView</Text>
      //     <NameList />}
          <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            // Function to call when a new scene should be displayed
            onForward={() => {    
              const nextIndex = route.index + 1;
              navigator.push({
                title: 'Scene ' + nextIndex,
                index: nextIndex,
              });
            }}

            // Function to call to go back to the previous scene
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
       // </ScrollView>
      // </View>
      )
  }
}

AppRegistry.registerComponent('HelloWorld',()=>Main)