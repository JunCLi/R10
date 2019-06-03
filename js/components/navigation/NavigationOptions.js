import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

export const defaultStackNavigationOptions = {
	headerStyle: {
		color: '#fff',
		backgroundColor: 'transparent',
	},
	headerBackground: (
		<LinearGradient
			colors={['#C5414D', '#9963E9']}
			style={{ flex: 1 }}
			start={{ x: 0, y: 0 }}
			end={{ x: 2, y: 1 }}
		/>
	),
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontSize: 25,
		fontWeight: 'bold',
		marginBottom: 10,
	},
}

export const tabBarOptions = {
	activeTintColor: 'white',
	inactiveTintColor: 'grey',
	activeBackgroundColor: 'black',
	inactiveBackgroundColor: 'black',
	labelStyle: {
		fontSize: 14,
	},
	style: {
		height: 70,
		paddingTop: 5,
		backgroundColor: 'black'
	}
}