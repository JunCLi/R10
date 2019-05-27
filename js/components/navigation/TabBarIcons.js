import React from 'react'

import Awesome5Icon from 'react-native-vector-icons/FontAwesome5'

export const getTabBarIcon = (navigation, focused, tintColor) => {
	const { routeName } = navigation.state
	let IconComponent
	let iconName

	if (routeName === 'Home') {
		IconComponent = Awesome5Icon
		iconName = 'home'
	}

	return <IconComponent name={iconName} size={25} color={tintColor} />
}