import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { ListItem, Text } from 'react-native-elements'
import moment from 'moment'
import IonIcon from 'react-native-vector-icons/Ionicons'

import { useQuery } from 'react-apollo-hooks'
import { getAllSessionsQuery } from '../../graphql/queries'

export default Schedule = props => {
	const { data, error, loading } = useQuery(getAllSessionsQuery)
	const [ favourite, setFavourite ] = useState({})

	if (error) return (
		<View><Text>error...</Text></View>
	)
	if (loading) return (
		<View><Text>loading...</Text></View>
	)

	const groupObjectBy = (objectArray, property) => {
		return objectArray.reduce((acc, object) => {
			const key = object[property]
			if (!acc[key]) acc[key] = []
			acc[key].push(object)
			return acc
		}, {})
	}

	// let groupedSessionsObject
	// useEffect(() => {
	// 	groupedSessionsObject = groupObjectBy(data.allSessions, 'startTime')
	// }, [])
	const groupedSessionsObject = groupObjectBy(data.allSessions, 'startTime')

	const handleFavourite = key => {
		setFavourite(prevState => {
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	const handleCheckSession = (sessionId) => {
		props.navigation.navigate('Session', {id: sessionId})
	}

	return (
		<ScrollView>
			<Text>Schedule</Text>
			{	Object.keys(groupedSessionsObject).map((timeSlot, index) => (
				<View key={timeSlot}>
					<Text>{moment(timeSlot).subtract(3, 'hours').format('h:mm a')}</Text>
					{groupedSessionsObject[timeSlot].map(session => (
						<ListItem
							key={session.id}
							title={session.title}
							subtitle={session.location}
							rightIcon={
								<IonIcon
									name='ios-heart'
									size={15}
									color={
										favourite[session.id] ? 'red' : 'grey'
									}
									onPress={() => handleFavourite(session.id)}
								/>
							}
							onPress={() => handleCheckSession(session.id)}
						/>
					))}
				</View>
			))}
		</ScrollView>
	)
}


