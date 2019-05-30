import React from 'react'
import { View } from 'react-native'

import { ListItem, Text } from 'react-native-elements'

import { sessionSpeakerStyles } from '../../stylesheets/sessionStyles'

export default SessionSpeaker = props => {
	const { speakerName, speakerImageUri, speakerId } = props

	const handleCheckSpeaker = () => {
		props.propsNavigationNavigate('Speaker', {id: speakerId})
	}

	return (
		<View style={sessionSpeakerStyles.container}>
			<Text style={sessionSpeakerStyles.presentedBy}>Presented by:</Text>
			<ListItem 
				leftAvatar={{
					title: speakerName,
					source: { uri: speakerImageUri },
					size: 'large', 
				}}
				title={speakerName}
				titleStyle={sessionSpeakerStyles.speakerName}
				containerStyle={sessionSpeakerStyles.speakerContainer}
				onPress={handleCheckSpeaker}
			/>
		</View>
	)
}