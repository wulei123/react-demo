export default class NetWorking{
	getFunc(){
		return async function getMoviesFromApi(){
	try{
		let response = await fetch('https://facebook.github.io/react-native/movies.json')
		let responseJson = await response.json()
		return responseJson.movies
	}catch(error){
		return console.error(error)
	}
	}
}
}
