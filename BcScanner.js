import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import BarcodeScanner from 'react-native-barcodescanner';

class BcScanner extends Component {
	constructor(props) {
		super(props);

		this.state = {
			torchMode: 'off',
			cameraType: 'back',
		};
	}

	navigate() {

		
		var navigateFunc = (e) => {
			console.log('bar code read');
			this.props.navigator.replace({
					name: 'BcScanned', 
					props: e
				});
		}
		var boundNavigateFunc = navigateFunc.bind(this);
		return boundNavigateFunc;
		
	}

	render() {
		return (
			<BarcodeScanner
			onBarCodeRead={this.navigate()}
			style={{
				flex: 1
			}}
			torchMode={this.state.torchMode}
			cameraType={this.state.cameraType} 
			/>
		)
	}
}

AppRegistry.registerComponent('BcScanner', () => BcScanner);

module.exports = BcScanner;