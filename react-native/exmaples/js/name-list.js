import React,{Component} from 'react'
import {ListView,Text,View} from 'react-native'

export default class NameList extends Component{
	constructor(props) {
	  super(props);
	  const ds = new ListView.DataSource({
	  	rowHasChanged : (r1,r2)=> r1!==r2
	  })
	  this.state = {
	  	dataSource :ds.cloneWithRows([
	  	'john','joel','james','jimmy','Dave'
	  	]),
	  	movies:[]
	  };
	}
	getMoviesFromApiAsync() {
     fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response)
      .then((responseJson) => {
       this.setState({movies:responseJson.movies}) ;
       })
      .catch((error) => {
        console.error(error);
      });
  }
	render(){
		return (
			<View>
				<ListView
				dataSource={this.state.dataSource}
				renderRow={(rowData)=><Text style={{fontSize:40}}>{rowData}</Text>}
				/>
			</View>
			)
	}
}