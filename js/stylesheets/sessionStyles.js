import { StyleSheet } from 'react-native'
import { red } from 'ansi-colors';

export const sessionStyles = StyleSheet.create({
	mainContainer: {
		padding: 25,
	},
})

export const sessionLocationStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'nowrap',
		justifyContent: 'space-between', 
	},

	text: {
		fontSize: 20,
		color: 'grey',
	},
})

export const sessionMainStyles = StyleSheet.create({
	container: {
		marginVertical: 20,
	},

	title: {
		fontSize: 30,
		marginBottom: 20,
	},

	time: {
		color: 'red',
		fontSize: 20,
		marginBottom: 20,
		textTransform: 'uppercase',
	},

	description: {
		fontSize: 25,
		lineHeight: 35,
		marginBottom: 20,
	},
})

export const sessionSpeakerStyles = StyleSheet.create({
	mainContainer: {
		marginBottom: 10
	},

	presentedBy: {
		fontSize: 20,
		color: 'grey',
	},

	speakerContainer: {
		marginVertical: 5,
		marginLeft: -10,
	},

	speakerName: {
		fontSize: 20,
		fontWeight: '500',
	},
})

export const sessionFavouriteStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 30,
	},

	button: {
		borderRadius: 50,
		paddingVertical: 13,
		width: '100%',
	},

	buttonText: {
		fontSize: 20,
		fontWeight: '500'
	}
})