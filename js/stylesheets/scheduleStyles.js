import { StyleSheet } from 'react-native'

export const scheduleTimeSlotStyles = StyleSheet.create({
	container: {
		backgroundColor: '#ddd',
		paddingHorizontal: 15,
		paddingVertical: 5,
	},

	timeSlot: {
		fontSize: 16,
		textTransform: 'uppercase',
	}
})

export const scheduleItemStyles = StyleSheet.create({
	container: {
		marginVertical: 5,
	},

	title: {
		fontSize: 20,
		marginBottom: 10,
	},

	subtitle: {
		color: '#777'
	},

	heart: {
		position: 'absolute',
		bottom: 15,
		right: 20,
	}
})