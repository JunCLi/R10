import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { toggleFavouriteMutation } from '../../graphql/mutations'

import CenteredRoundedButton from '../utils/CenteredRoundedButton'

export default SessionFavourite = (props) => {
	const toggleFavourite = useMutation(toggleFavouriteMutation, {
		variables: { id: props.navigation.state.params.id}
	})
	
	return (
		<CenteredRoundedButton 
			buttonText={'Add to Faves'}
			buttonFunction={toggleFavourite}
		/>
	)
}