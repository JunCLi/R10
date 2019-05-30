import { StyleSheet } from 'react-native'

export const sessionStyles = StyleSheet.create({
	mainContainer: {
		padding: 25,
	},

	lightBoxHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		flexWrap: 'nowrap',
		padding: 40,
		backgroundColor: 'black',
	},

	lightBoxClose: {
		marginRight: 20,
	},

	lightBoxHeaderText: {
		color: 'white',
		fontSize: 25,
		textAlign: 'center',
	},

	screwLightBox: {
		color: 'black',
	}
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