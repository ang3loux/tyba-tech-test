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
  emailInput: {
    width: '50%',
  },
  usrPwdInput: {
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

const SignUp = () => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [user, setUser] = useState('')
  const [pwd, setPwd] = useState('')
  const isValid = email.length > 4 && user.length > 4 && pwd.length > 4

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Input
        style={styles.emailInput}
        label="Email:"
        autoCapitalize="none"
        autoCompleteType="email"
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        style={styles.usrPwdInput}
        label="User:"
        autoCapitalize="none"
        autoCompleteType="off"
        onChangeText={(value) => setUser(value)}
      />
      <Input
        style={styles.usrPwdInput}
        label="Password:"
        secureTextEntry
        onChangeText={(value) => setPwd(value)}
      />
      <Button
        style={styles.signInButton}
        title="Sign up"
        disabled={!isValid}
        color="white"
        backgroundColor={colors[isValid ? 'purple' : 'lightPurple']}
        onPress={() => {
          dispatch(signIn({ token: 'imatoken' }))
        }}
      />
    </View>
  )
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

SignUp.defaultProps = {
  navigation: { navigate: () => null },
}

export default SignUp
