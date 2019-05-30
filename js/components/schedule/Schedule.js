import React, { useState, useEffect } from 'react'
import { View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler'
import { Text } from 'react-native-elements'
import { NavigationEvents } from 'react-navigation'
import moment from 'moment'
import AsyncStorage from '@react-native-community/async-storage'

import { useQuery } from 'react-apollo-hooks'
import { getAllSessionsQuery } from '../../graphql/queries'

import ScheduleTimeSlot from './ScheduleTimeSlot'
import ScheduleItem from './ScheduleItem'

export default Schedule = props => {
	const { data, error, loading } = useQuery(getAllSessionsQuery)
	const [ favourite, setFavourite ] = useState({})

	useEffect(() => {
		_retreiveData()
	}, [])

	const _storeData = async data => {
		try {
			await AsyncStorage.setItem('favSessions', JSON.stringify(data))
		} catch(err) {
			throw err
		}
	}

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

	const groupObjectBy = (objectArray, property) => {
		return objectArray.reduce((acc, object) => {
			const key = object[property]
			if (!acc[key]) acc[key] = []
			acc[key].push(object)
			return acc
		}, {})
	}

	const groupedSessionsObject = groupObjectBy(data.allSessions, 'startTime')

	const handleFavourite = key => {
		setFavourite(prevState => {
			_storeData({...prevState, [key]: !prevState[key]})
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	const handleCheckSession = async (sessionId) => {
		await _retreiveData()
		props.navigation.navigate('Session', {id: sessionId})
	}

	return (
		<ScrollView>
			<NavigationEvents
				onDidFocus= {() => {
					_retreiveData()
				}}
			/>
			{	Object.keys(groupedSessionsObject).map((timeSlot, index) => (
				<View key={timeSlot}>
					<ScheduleTimeSlot
						timeSlot={moment(timeSlot).subtract(3, 'hours').format('h:mm a')}
					/>
					{groupedSessionsObject[timeSlot].map(session => (
						<ScheduleItem
							key={session.id}
							id={session.id}
							title={session.title}
							subtitle={session.location}
							favourite={favourite[session.id]}
							handleCheckSession={handleCheckSession}
							handleFavourite={handleFavourite}
						/>
					))}
				</View>
			))}
		</ScrollView>
	)
}