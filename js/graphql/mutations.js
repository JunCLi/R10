import gql from 'graphql-tag'

export const toggleFavouriteMutation = gql`
	mutation ToggleFavourite($id: String!){
		toggleFavourite(id: $id) @client
	}
`