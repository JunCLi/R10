import React, { useState } from 'react'
import { View } from 'react-native'

import { Text } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { accordianStyles } from '../../stylesheets/aboutStyles'

export default Accordion = (props) => {
	const { conduct, collapsableState, handleCollapsable } = props
	
	const collapsableIcon = collapsableState ? 'minus' : 'plus'

	return (
		<TouchableOpacity onPress={handleCollapsable}>
			<View style={accordianStyles.header}>
				<AwesomeIcon name={collapsableIcon} size={20} color='purple' style={accordianStyles.headerIcon}/>
				<Text style={accordianStyles.headerText}>{conduct.title}</Text>
			</View>
			{collapsableState && <Text>{conduct.description}</Text>}
		</TouchableOpacity>
	)
}