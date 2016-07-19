import React, { Component } from 'react';
import { AppRegistry, TouchableHighlight, View, StyleSheet, Text} from 'react-native';


class Home extends Component {
	navigate() {
		this.props.navigator.push({name: 'BcScanner'});
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Welcome to React Native and the HOME COMP YOOO
				</Text>
				<TouchableHighlight onPress={this.navigate.bind(this)}>
					<Text style={styles.buttonText}>
						Button!
					</Text>
				</TouchableHighlight>
			</View>
		);
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

AppRegistry.registerComponent('Home', () => Home);

module.exports = Home;