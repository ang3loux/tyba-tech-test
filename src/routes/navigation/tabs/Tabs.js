import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, ProfileNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          case 'History':
            return (
              <FontIcon
                name="list"
                color={focused ? colors.lightPurple : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.lightPurple,
      inactiveTintColor: colors.gray,
      style: {},
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="History" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator
