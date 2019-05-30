import React from 'react'
import { View } from 'react-native'

import { Text } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { sessionLocationStyles } from '../../stylesheets/sessionStyles'

export default SessionLocation = props => {
	const { favourite, location } = props

	return (
		<View style={sessionLocationStyles.container}>
			<Text style={sessionLocationStyles.text}>{location}</Text>
			{	favourite && <IonIcon name='ios-heart' size={20} color='red' /> }
		</View>
	)
}