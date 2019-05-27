/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { View } from 'react-native'
import { ApolloProvider } from 'react-apollo-hooks'
import client from './js/apolloclient'

import Navigator from './js/components/navigation/Navigator'

export default App = () => {
	return (
		<ApolloProvider client={client}>
			<View style={{flex: 1}}>
				<Navigator />
			</View>
		</ApolloProvider>
	)
}