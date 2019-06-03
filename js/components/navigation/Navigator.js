import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import { defaultStackNavigationOptions, tabBarOptions } from './NavigationOptions'
import { getTabBarIcon } from './TabBarIcons'

import About from '../about/About'
import AppMap from '../appMap/AppMap'
import Faves from '../faves/Faves'
import Schedule from '../schedule/Schedule'
import Session from '../session/Session'
import Speaker from '../speaker/Speaker'

const AboutStack = createStackNavigator(
	{
		About: {
			screen: About,
			navigationOptions: {
				title: 'About',
			},
		}
	},
	{
		initialRouteName: 'About',
		defaultNavigationOptions: defaultStackNavigationOptions
	}
)

const FavesStack = createStackNavigator(
	{
		Faves: {
			screen: Faves,
			navigationOptions: {
				title: 'Faves',
			},
		},
		Session: {
			screen: Session,
			navigationOptions: {
				title: 'Session',
			},
		},
		Speaker: {
			screen: Speaker,
			navigationOptions: {
				title: 'Speaker',
			},
		}
	},
	{
		initialRouteName: 'Faves',
		defaultNavigationOptions: defaultStackNavigationOptions
	}
)

const AppMapStack = createStackNavigator(
	{
		AppMap: {
			screen: AppMap,
			navigationOptions: {
				title: 'Map',
			},
		}
	},
	{
		initialRouteName: 'AppMap',
		defaultNavigationOptions: defaultStackNavigationOptions
	}
)

const ScheduleStack = createStackNavigator(
	{
		Schedule: {
			screen: Schedule,
			navigationOptions: {
				title: 'Schedule',
			},
		},
		Session: {
			screen: Session,
			navigationOptions: {
				title: 'Session',
			},
		},
		Speaker: {
			screen: Speaker,
			navigationOptions: {
				title: 'Speaker',
			},
		}
	},
	{
		initialRouteName: 'Schedule',
		defaultNavigationOptions: defaultStackNavigationOptions
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
		tabBarOptions: tabBarOptions,
		animationEnabled: true,
		swipreEnabled: true,
	}
)

export default Navigator = createAppContainer(TabNavigator)