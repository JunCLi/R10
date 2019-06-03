import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Divider, Text } from 'react-native-elements'
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'
import Lightbox from 'react-native-lightbox'
import AwesomeIcon from 'react-native-vector-icons/FontAwesome'

import { useQuery } from 'react-apollo-hooks'
import { getSessionDetailQuery } from '../../graphql/queries'

import { sessionStyles } from '../../stylesheets/sessionStyles'

import SessionLocation from './SessionLocation'
import SessionMain from './SessionMain'
import SessionSpeaker from './SessionSpeaker'
import SessionFavourite from './SessionFavourite'
import Speaker from '../speaker/Speaker'


export default SessionDetail = props => {
	const [ favourite, setFavourite ] = useState({})
	const [ showSpeaker, setShowSpeaker ] = useState(false)
	const { data, error, loading } = useQuery(getSessionDetailQuery, {
		variables: {id: props.navigation.state.params.id}
	})

	useEffect(() => {
		_retreiveData()
	}, [])

	const _retreiveData = async () => {
		try {
			const value = await AsyncStorage.getItem('favSessions')
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
			<Lightbox
				renderHeader={close => (
					<View style={sessionStyles.lightBoxHeader} >
						<TouchableOpacity
							style={sessionStyles.lightBoxClose}
							onPress={close}
						>
							<AwesomeIcon name='close' size={30} color='white' />
						</TouchableOpacity>
						<Text style={sessionStyles.lightBoxHeaderText}>About the Speaker</Text>
						<View style={sessionStyles.screwLightBox}>
							<AwesomeIcon name='close' size={30} color='black' />
						</View>
					</View>
				)}
				renderContent={() => <Speaker id={data.Session.speaker.id}/>}
			>
				<SessionSpeaker
					speakerName={data.Session.speaker.name}
					speakerImageUri={data.Session.speaker.image}
					speakerId={data.Session.speaker.id}
					propsNavigationNavigate={props.navigation.navigate}
				/>
			</Lightbox>
			<Divider />
			<SessionFavourite
				favourite={favourite}
				setFavourite={setFavourite}
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