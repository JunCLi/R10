import React from 'react'
import { View } from 'react-native'

import { Button } from 'react-native-elements'

import { sessionFavouriteStyles } from '../../stylesheets/sessionStyles'

export default SessionFavourite = () => {
	return (
		<View style={sessionFavouriteStyles.container}>
			<Button
				title='Add to Faves'
				titleStyle={sessionFavouriteStyles.buttonText}
				buttonStyle={sessionFavouriteStyles.button}
			/>
		</View>
	)
}