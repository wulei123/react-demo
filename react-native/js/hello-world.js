import React, {Component} from 'react'
import {Text,View,StyleSheet} from 'react-native'

export default class HelloWorld extends Component{
	render(){
		return (
			<View>
				<Text style={styles.hello}>Hello World !!!</Text>
			</View>
			)
	}
}

const styles = StyleSheet.create({
	hello:{
		textAlign:'center',
		fontSize:40
	}
})