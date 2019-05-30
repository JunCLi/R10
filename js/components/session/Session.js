import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Divider, Text } from 'react-native-elements'
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'

import { useQuery } from 'react-apollo-hooks'
import { getSessionDetailQuery } from '../../graphql/queries'

import { sessionStyles } from '../../stylesheets/sessionStyles'

import SessionLocation from './SessionLocation'
import SessionMain from './SessionMain'
import SessionSpeaker from './SessionSpeaker'
import SessionFavourite from './SessionFavourite';


export default SessionDetail = props => {
	const [ favourite, setFavourite ] = useState({})
	const { data, error, loading } = useQuery(getSessionDetailQuery, {
		variables: {id: props.navigation.state.params.id}
	})

	useEffect(() => {
		_retreiveData()
	}, [])

	const _retreiveData = async () => {
		try {
			const value = await AsyncStorage.getItem('favSessions2')
			const jsonValue = JSON.parse(value)
			await jsonValue && setFavourite(jsonValue)
		} catch (err) {
			throw err
		}
	}

	if (error) return (
		<View><Text>error...</Text></View>
	)
	if (loading) return (
		<View><Text>loading...</Text></View>
	)

	return (
		<ScrollView style={sessionStyles.mainContainer}>
			<SessionLocation
				location={data.Session.location}
				favourite={favourite[props.navigation.state.params.id]}/>
			<SessionMain 
				title={data.Session.title}
				time={moment(data.Session.startTime).subtract(3, 'hours').format('h:mm a')}
				description={data.Session.description}
			/>
			<SessionSpeaker
				speakerName={data.Session.speaker.name}
				speakerImageUri={data.Session.speaker.image}
				speakerId={data.Session.speaker.id}
				propsNavigationNavigate={props.navigation.navigate}
			/>
			<Divider />
			<SessionFavourite
				buttonText={
					favourite[props.navigation.state.params.id] ?
					'Remove from Faves' :
					'Add to Faves'
				}
				id={props.navigation.state.params.id}
			/>
		</ScrollView>
	)
}