import React, {Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class HelloWorld extends Component{
	constructor(props) {
	  super(props);
	  this.state = {showText:true};
	  setInterval(()=>{this.setState({showText:!this.state.showText})},1000)
	}
	render(){
		let text = this.state.showText ? 'Hello World !!!' : ''
		return (
			<View>
				<Text style={styles.hello}>{text}</Text>
				<Text style={styles.red}>{text}</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	hello:{
		textAlign:'center',
		fontSize:40
	},
	red:{
		textAlign:'center',
		fontSize:40,
		color:'red'
	}
})