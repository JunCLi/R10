import React from 'react'
import { View } from 'react-native'

import { Text } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { sessionLocationStyles } from '../../stylesheets/sessionStyles'

export default SessionLocation = props => {
	console.log('sessionLocation Props: ', props)
	const { location } = props


	return (
		<View style={sessionLocationStyles.container}>
			<Text style={sessionLocationStyles.text}>{location}</Text>
			<IonIcon name='ios-heart' size={20} color='grey' />
		</View>
	)
}