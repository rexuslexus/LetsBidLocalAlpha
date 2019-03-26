import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { Icon } from 'react-native-elements'

export default class MenuButton extends React.Component {
	render() {
		return(
			<Icon
  name = 'md-menu'
  type='ionicon'
  color='#0031ca'
  style={styles.menuIcon}
  onPress={() => this.props.navigation.toggleDrawer()} />
		)
	}
}

const styles = StyleSheet.create({
	menuIcon: {
		zIndex: 9,
		position: 'absolute',
		top: 40,
		left: 20,
	}
})