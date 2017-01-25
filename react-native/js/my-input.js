import React ,{Component} from 'react'
import {TextInput,Text,View} from 'react-native'

export default class MyTextInput extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {text:''};
	}
	render(){
		return (
		<View>
			<TextInput placeholder="pealse enter text" onChangeText={(text)=>this.setState({text})}/>
			<Text>{this.state.text}</Text>
		</View>
			)
	}
}