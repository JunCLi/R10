import { StyleSheet } from 'react-native'

export const aboutStyles = StyleSheet.create({
	aboutContainer: {
		margin: 15
	},

	mainHeader: {
		color: 'red',
		fontSize: 75,
		fontWeight: '600',
		marginVertical: 5,
		textAlign: 'center',
	},

	headerText: {
		fontSize: 35,
		fontWeight: '500',
		marginVertical: 10,
	},

	bodyText: {
		fontSize: 22,
		marginVertical: 10,
	},

	divider: {
		marginVertical: 10,
		marginBottom: 15,
	},

	dateAndVenue: {
		marginVertical: 10,
	},
})

export const accordianStyles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'nowrap',
	},

	headerIcon: {
		marginRight: 10,
	},

	headerText: {
		color: '#aa55d6',
		fontSize: 22,
		marginVertical: 15,
		width: '80%'
	},

	bodyText: {
		fontSize: 22,
		marginVertical: 15,
	}
})