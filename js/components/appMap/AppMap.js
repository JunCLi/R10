import React from 'react'
import { Text, View } from 'react-native'

import MapView, { Marker, Callout } from 'react-native-maps'

export default AppMap = () => {
	return (
		<View style={{flex: 1}}>
			<MapView
				style={{flex: 1}}
				region={{
					latitude: 43.643819,
					longitude: -79.3999787,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421
				}}
				showsUserLocation={true}
			>
				<Marker
					coordinate={{
						latitude: 43.6437976,
						longitude: -79.3977782,
					}}
					image={require('../../../images/map_pin.png')}
					title='R10'
					description='Location of the R10 conference.'
				>
				</Marker>
			</MapView>
		</View>
	)
}

