import { StyleSheet } from 'react-native'

export const aboutStyles = StyleSheet.create({
	aboutContainer: {
		margin: 10
	},

	headerText: {
		marginVertical: 10,
		textAlign: 'center'
	},

	bodyText: {
		marginVertical: 10,
	}
})

export const accordianStyles = StyleSheet.create({
	header: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		flexWrap: 'nowrap'
	},

	headerIcon: {
		marginRight: 10,
	},

	headerText: {
		marginVertical: 10,
		fontSize: 20,
		width: '80%'
	}
})