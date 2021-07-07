import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import History from 'scenes/history'
import HeaderLeft from './HeaderLeft'

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="History"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="History"
      component={History}
      options={({ navigation }) => ({
        title: 'History',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      })}
    />
  </Stack.Navigator>
)
