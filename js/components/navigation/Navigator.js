import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import { getTabBarIcon } from './TabBarIcons'

import Home from '../home/Home'

const HomeStack = createStackNavigator(
	{
		Home: {
			screen: Home
		}
	},
	{
		initialRouteName: 'Home'
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Home: {
			screen: HomeStack,
		}
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => (
				getTabBarIcon(navigation, focused, tintColor)
			)
		}),
		tabBarOptions: {
			activeTintColor: 'gray',
			inactiveTintColor: 'gray',
			style: {
				paddingTop: 5,
			}
		},
		animationEnabled: true,
		swipreEnabled: true,
	}
)

export default Navigator = createAppContainer(TabNavigator)