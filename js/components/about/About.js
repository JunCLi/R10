import React, { useState} from 'react'
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
			<View>
				<Text style={aboutStyles.mainHeader}>{'<R10>'}</Text>
				<Divider style={aboutStyles.divider}/>
				<Text style={aboutStyles.bodyText}>R10 is a conference that focuses on just about any topic related to dev.</Text>
			</View>
			
			<View style={aboutStyles.dateAndVenue}>
				<Text style={aboutStyles.headerText}>Date & Venue</Text>
				<Text style={aboutStyles.bodyText}>The R10 conference will take place on February 30, 2020 in Vancouver, BC.</Text>
			</View>

			<>
				<Text style={aboutStyles.headerText}>Code of Conduct</Text>
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
			</>
		</ScrollView>
	)
} 