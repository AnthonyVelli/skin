import React, { Component } from 'react';
import { AppRegistry, StyleSheet, BackAndroid, Navigator} from 'react-native';
import BcScanner from './BcScanner';
import Home from './Home';
import BcScanned from './BcScanned';


var _navigator; // we fill this up upon on first navigation.

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

class skin extends Component {
	render() {
		return (
			<Navigator
				initialRoute={{
					name: 'Home'
				}}
				renderScene={this.RouteMapper}
			/>
		)
	}

	RouteMapper(route, navigator) {
		_navigator = navigator;
		console.log('in route map');
		console.log(route);
		if (route.name === 'Home') {
			return (
				<Home navigator={navigator} />
				);
		} else if (route.name === 'BcScanner') {
			return (
				<BcScanner navigator={navigator} />
				);
		} else if (route.name === 'BcScanned') {
			return (
				<BcScanned navigator={navigator} {...route.props}/>
				);
		}
	}

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});


AppRegistry.registerComponent('skin', () => skin);

module.exports = skin;