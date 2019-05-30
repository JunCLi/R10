import gql from 'graphql-tag'

const toggleFavouriteQuery = gql`
	query favourite {
		favourite @client
	}
`

export const Mutation = {
	toggleFavourite: (parent, input, { cache, getCacheKey }) => {
		console.log(id)
		console.log(cache)

		const { id } = input
		let data
		try {
			data = cache.readQuery({
				query: toggleFavouriteQuery
			})
		} catch {}

		cache.writeData({
			data: {
				favouriteId,
				favouriteStatus
			}
		})

		return null
	}
}