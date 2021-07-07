import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import { useDispatch } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import { colors } from 'theme'
import { signIn } from 'slices/app.slice'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  usrInput: {
    width: '50%',
  },
  pwdInput: {
    width: '50%',
    marginTop: 8,
  },
  signInButton: {
    marginTop: 24,
  },
  signUpButton: {
    marginTop: 8,
  },
})

const SignIn = ({ navigation }) => {
  const dispatch = useDispatch()

  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const isValid = user.length > 4 && pwd.length > 4

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Input
        style={styles.usrInput}
        label="User:"
        autoCapitalize="none"
        autoCompleteType="off"
        onChangeText={(value) => setUser(value)}
      />
      <Input
        style={styles.pwdInput}
        label="Password:"
        secureTextEntry
        onChangeText={(value) => setPwd(value)}
      />
      <Button
        style={styles.signInButton}
        title="Log in"
        disabled={!isValid}
        color="white"
        backgroundColor={colors[isValid ? 'purple' : 'lightPurple']}
        onPress={() => {
          dispatch(signIn({ token: 'imatoken' }))
        }}
      />
      <Button
        style={styles.signUpButton}
        title="Sign Up"
        color="white"
        backgroundColor={colors.purple}
        onPress={() => {
          navigation.navigate('SignUp', { from: 'SignIn' })
        }}
      />
    </View>
  )
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

SignIn.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignIn
