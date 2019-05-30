import { StyleSheet } from 'react-native'

export const centeredRoundedButton = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 30,
	},

	button: {
		borderRadius: 50,
		marginBottom: 50,
		paddingVertical: 13,
		width: '100%',
	},

	buttonText: {
		fontSize: 20,
		fontWeight: '500'
	}
})