import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation'

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
		defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#aa55d6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
				fontSize: 25,
				fontWeight: 'bold',
				marginBottom: 10,
      },
    },
	}
)

const FavesStack = createStackNavigator(
	{
		Faves: {
			screen: Faves,
			navigationOptions: {
				title: 'Faves',
			},
		}
	},
	{
		initialRouteName: 'Faves',
		defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#aa55d6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
				fontSize: 25,
        fontWeight: 'bold',
				marginBottom: 10,
      },
    },
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
		defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#aa55d6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
				fontSize: 25,
        fontWeight: 'bold',
				marginBottom: 10,
      },
    },
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
		defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#aa55d6',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
				fontSize: 25,
        fontWeight: 'bold',
				marginBottom: 10,
      },
    },
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