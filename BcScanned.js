import React, { Component } from 'react';
import {AppRegistry, View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

class BcScanned extends Component {
	
	navigate() {
		this.props.navigator.push({name: 'BcScanner'});
	}

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
				{this.props.data}/n
				{this.props.type}
				</Text>
				<TouchableNativeFeedback
					style={styles.button}
					onPress={this.navigate.bind(this)} >
					<View>
						<Text style={styles.buttonText}>
							Scan Again!
						</Text>
					</View>
				</TouchableNativeFeedback>
			</View>
		)
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

AppRegistry.registerComponent('BcScanned', () => BcScanned);

module.exports = BcScanned;