import React from 'react'
import { View } from 'react-native'

import { Text } from 'react-native-elements'

import { sessionMainStyles } from '../../stylesheets/sessionStyles'

export default SessionLocation = props => {
	const { title, time, description } = props

	return (
		<View style={sessionMainStyles.container}>
			<Text style={sessionMainStyles.title}>{title}</Text>
			<Text style={sessionMainStyles.time}>{time}</Text>
			<Text style={sessionMainStyles.description}>{description}</Text>
		</View>
	)
}