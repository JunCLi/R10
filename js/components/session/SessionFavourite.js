import React from 'react'

import { useMutation } from 'react-apollo-hooks'
import { toggleFavouriteMutation } from '../../graphql/mutations'

import CenteredRoundedButton from '../utils/CenteredRoundedButton'

export default SessionFavourite = (props) => {
	const { buttonText, id } = props
	const toggleFavourite = useMutation(toggleFavouriteMutation, {
		variables: { id: id}
	})
	
	return (
		<CenteredRoundedButton 
			buttonText={buttonText}
			buttonFunction={toggleFavourite}
		/>
	)
}