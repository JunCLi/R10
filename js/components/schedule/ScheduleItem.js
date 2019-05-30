import React from 'react'
import { View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'
import { Divider, ListItem, Text } from 'react-native-elements'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { scheduleItemStyles } from '../../stylesheets/scheduleStyles'

export default ScheduleTimeSlot = props => {
	const { id, title, subtitle, favourite, handleCheckSession, handleFavourite } = props

	return (
		<>
			<ListItem
				containerStyle={scheduleItemStyles.container}
				title={title}
				titleStyle={scheduleItemStyles.title}
				subtitle={subtitle}
				subtitleStyle={scheduleItemStyles.subtitle}
				rightIcon={
					<IonIcon
						name='ios-heart'
						size={15}
						color={ favourite ? 'red' : '#ddd'}
						style={scheduleItemStyles.heart}
						onPress={() => handleFavourite(id)}
					/>
				}
				onPress={() => handleCheckSession(id)}
			/>
			<Divider />
		</>
	)
}