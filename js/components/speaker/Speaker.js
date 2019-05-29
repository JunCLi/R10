import React from 'react'
import { View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Avatar, Text } from 'react-native-elements' 

import { useQuery } from 'react-apollo-hooks'
import { getSpeakerDetailQuery } from '../../graphql/queries'

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

	return (
		<ScrollView>
			<Avatar
				size='large'
				title={data.Speaker.name}
				source={{ uri: data.Speaker.image }}
				rounded
			/>
			<Text h2>{data.Speaker.name}</Text>
			<Text>{data.Speaker.bio}</Text>
			
		</ScrollView>
	)
}