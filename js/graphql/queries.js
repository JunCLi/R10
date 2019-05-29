import gql from 'graphql-tag'

export const getAllConductsQuery = gql`
	query {
		allConducts {
			id
			description
			title
			order
		}
	}
`
export const getAllSessionsQuery = gql`
	query {
		allSessions {
			id
			description
			location
			startTime
			title
		}
	}
`

export const getSessionDetailQuery = gql`
	query getSessionByID($id: ID!){
		Session(id: $id ) {
			id
			description
			location
			startTime
			title
			speaker {
				id
				name
				image
			}
		}
	}
`

export const getSpeakerDetailQuery = gql`
	query getSpeakerByID($id: ID!){
		Speaker(id: $id) {
			id
			bio
			image
			name
			url
		}
	}
`