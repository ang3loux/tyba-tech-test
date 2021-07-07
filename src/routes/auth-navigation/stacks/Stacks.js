import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from 'theme'
import SignIn from 'scenes/sign-in'
import SignUp from 'scenes/sign-up'

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

const AuthNavigator = () => (
  <Stack.Navigator
    initialRouteName="SignIn"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={() => ({ title: 'Sign In' })}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={() => ({ title: 'Sign Up' })}
    />
  </Stack.Navigator>
)

export default AuthNavigator
