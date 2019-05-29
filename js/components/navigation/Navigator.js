import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import { getTabBarIcon } from './TabBarIcons'

import About from '../about/About'
import AppMap from '../appMap/AppMap'
import Faves from '../faves/Faves'
import Schedule from '../schedule/Schedule'
import SessionDetail from '../session/SessionDetail'


const AboutStack = createStackNavigator(
	{
		About: {
			screen: About
		}
	},
	{
		initialRouteName: 'About'
	}
)

const FavesStack = createStackNavigator(
	{
		Faves: {
			screen: Faves
		}
	},
	{
		initialRouteName: 'Faves'
	}
)

const AppMapStack = createStackNavigator(
	{
		AppMap: {
			screen: AppMap
		}
	},
	{
		initialRouteName: 'AppMap'
	}
)

const ScheduleStack = createStackNavigator(
	{
		Schedule: {
			screen: Schedule
		},
		SessionDetail: {
			screen: SessionDetail
		}
	},
	{
		initialRouteName: 'Schedule'
	}
)

const TabNavigator = createBottomTabNavigator(
	{
		Schedule: {
			screen: ScheduleStack,
		},
		Map: {
			screen: AppMapStack,
		},
		Faves: {
			screen: FavesStack,
		},
		About: {
			screen: AboutStack
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => (
				getTabBarIcon(navigation, focused, tintColor)
			)
		}),
		tabBarOptions: {
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
		},
		animationEnabled: true,
		swipreEnabled: true,
	}
)

export default Navigator = createAppContainer(TabNavigator)