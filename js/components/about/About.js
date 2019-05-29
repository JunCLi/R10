import React, {Fragment, useState} from 'react'
import { View } from 'react-native'

import { ScrollView } from 'react-native-gesture-handler';
import { Divider, Text } from 'react-native-elements'

import { useQuery } from 'react-apollo-hooks'
import { getAllConductsQuery } from '../../graphql/queries'

import { aboutStyles } from '../../stylesheets/aboutStyles'

import Accordion from './Accordion'

export default About = () => {
	const { data, error, loading } = useQuery(getAllConductsQuery)
	const [activeSections, setActiveSections] = useState({})
	
	if (error) return (
		<View><Text>error...</Text></View>
	)
	if (loading) return (
		<View><Text>loading...</Text></View>
	)

	const handleCollapsable = key => {
		setActiveSections(prevState => {
			return { ...prevState, [key]: !prevState[key]}
		})
	}

	return (
		<ScrollView style={aboutStyles.aboutContainer}>
			<Fragment>
				<Text h1 style={aboutStyles.headerText}>{'<R10>'}</Text>
				<Divider />
				<Text style={aboutStyles.bodyText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
			</Fragment>
			
			<Fragment>
				<Text h2 style={aboutStyles.headerText}>Date & Venue</Text>
				<Text style={aboutStyles.bodyText}>The R10 conference will take place on February 30, 2020 in Vancouver, BC.</Text>
			</Fragment>

			<Fragment>
				<Text h2 style={aboutStyles.headerText}>Code of Conduct</Text>
				<View>
					{ data.allConducts.map(conduct => (
						<Accordion 
							key={conduct.id}
							handleCollapsable={() => handleCollapsable(conduct.id)}
							conduct={conduct}
							collapsableState={activeSections[conduct.id]}
						/>
					))}
				</View>
			</Fragment>
		</ScrollView>
	)
} 