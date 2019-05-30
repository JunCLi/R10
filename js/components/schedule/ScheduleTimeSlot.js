import React from 'react'
import { View } from 'react-native'

import { Text } from 'react-native-elements'

import { scheduleTimeSlotStyles } from '../../stylesheets/scheduleStyles'

export default ScheduleTimeSlot = props => {
	const { timeSlot } = props

	return (
		<View style={scheduleTimeSlotStyles.container}>
			<Text style={scheduleTimeSlotStyles.timeSlot}>{timeSlot}</Text>
		</View>
	)
}