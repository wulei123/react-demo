import React, {Component} from 'react'
import {Image} from 'react-native'

export default class MyImage extends Component{
	render(){
		let pic = {
			uri: this.props.src
		}
		let style = this.props.style
		return (
			<Image source={pic} style={style} />
			)
	}
}