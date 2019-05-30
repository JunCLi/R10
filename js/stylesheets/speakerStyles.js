import { StyleSheet } from 'react-native'

export const speakerStyles = StyleSheet.create({
	outerContainer: {
		backgroundColor: 'black',
	},

	mainContainer: {
		backgroundColor: 'white',
		margin: 25,
		marginTop: 150,
		padding: 25,
		borderRadius: 10,
	},
	
	avatar: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',

		marginBottom: 20,
	},

	speakerName: {
		fontSize: 35,
		marginBottom: 30,
		textAlign: 'center',
	},

	speakerBio: {
		fontSize: 20,
		lineHeight: 30,
	},
})