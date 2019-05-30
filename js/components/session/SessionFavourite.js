import React from 'react'

import AsyncStorage from '@react-native-community/async-storage'

import CenteredRoundedButton from '../utils/CenteredRoundedButton'

export default SessionFavourite = (props) => {
	const { buttonText, id, favourite, setFavourite } = props

	const toggleFavourite = key => {
		setFavourite(prevState => {
			_storeData({...prevState, [key]: !prevState[key]})
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	const _storeData = async data => {
		try {
			await AsyncStorage.setItem('favSessions', JSON.stringify(data))
		} catch(err) {
			throw err
		}
	}

	return (
		<CenteredRoundedButton 
			buttonText={buttonText}
			buttonFunction={() => toggleFavourite(id)}
		/>
	)
}