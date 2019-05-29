import React from 'react'
import { View } from 'react-native'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Button, Divider, Text } from 'react-native-elements'
import moment from 'moment'

import { useQuery } from 'react-apollo-hooks'
import { getSessionDetailQuery } from '../../graphql/queries'

import { sessionStyles } from '../../stylesheets/sessionStyles'

import SessionLocation from './SessionLocation'
import SessionMain from './SessionMain'
import SessionSpeaker from './SessionSpeaker'
import SessionFavourite from './SessionFavourite'

export default SessionDetail = props => {
	const { data, error, loading } = useQuery(getSessionDetailQuery, {
		variables: {id: props.navigation.state.params.id}
	})

	if (error) return (
		<View><Text>error...</Text></View>
	)
	if (loading) return (
		<View><Text>loading...</Text></View>
	)

	const handleCheckSpeaker = speakerId => {
		props.navigation.navigate('Speaker', {id: speakerId})
	}

	console.log(data.Session)
	return (
		<ScrollView style={sessionStyles.mainContainer}>
			<SessionLocation location={data.Session.location }/>
			<SessionMain 
				title={data.Session.title}
				time={moment(data.Session.startTime).subtract(3, 'hours').format('h:mm a')}
				description={data.Session.description}
			/>
			<SessionSpeaker
				speakerName={data.Session.speaker.name}
				speakerImageUri={data.Session.speaker.image}
				onPress={() => handleCheckSpeaker(data.Session.speaker.id)}
			/>
			<Divider />
			<SessionFavourite />
		</ScrollView>
	)
}