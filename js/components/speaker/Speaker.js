import React from 'react'
import { Linking, View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Alert, Avatar, Text } from 'react-native-elements' 

import { useQuery } from 'react-apollo-hooks'
import { getSpeakerDetailQuery } from '../../graphql/queries'

import { speakerStyles } from '../../stylesheets/speakerStyles'

import CenteredRoundedButton from '../utils/CenteredRoundedButton'

export default Speaker = props => {
	const { data, error, loading } = useQuery(getSpeakerDetailQuery, {
		variables: {id: props.navigation.state.params.id}
	})

	if (error) return (
		<View><Text>error...</Text></View>
	)
	if (loading) return (
		<View><Text>loading...</Text></View>
	)

	console.log(data)

	const handleButtonFunction = () => {
		Linking.canOpenURL(data.Speaker.url).then(supported => {
			if (supported) {
				Linking.openURL(data.Speaker.url) 
			} else {
				Alert.alert(
					'Alert',
					'Cannot open URL'
				)
			}
		})
	}

	return (
		<ScrollView style={speakerStyles.mainContainer}>
			<View style={speakerStyles.avatar}>
				<Avatar
					size={130}
					title={data.Speaker.name}
					source={{ uri: data.Speaker.image }}
					rounded
				/>
			</View>
			<Text style={speakerStyles.speakerName}>{data.Speaker.name}</Text>
			<Text style={speakerStyles.speakerBio}>{data.Speaker.bio}</Text>
			<CenteredRoundedButton 
				buttonText={'Read More on Wikipedia'}
				buttonFunction={handleButtonFunction}
			/>
		</ScrollView>
	)
}