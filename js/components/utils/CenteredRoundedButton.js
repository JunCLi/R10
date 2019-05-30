import React from 'react'
import { View } from 'react-native'

import { Button } from 'react-native-elements'

import { centeredRoundedButton } from '../../stylesheets/utilsStyles'

export default SessionFavourite = props => {
	const { buttonFunction, buttonText } = props
	
	return (
		<View style={centeredRoundedButton.container}>
			<Button
				title={buttonText}
				titleStyle={centeredRoundedButton.buttonText}
				buttonStyle={centeredRoundedButton.button}
				onPress={buttonFunction}
			/>
		</View>
	)
}