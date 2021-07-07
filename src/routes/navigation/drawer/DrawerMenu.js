import React from 'react'
import PropTypes from 'prop-types'
import { View, SafeAreaView } from 'react-native'
import { useDispatch } from 'react-redux'
import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Button from 'components/Button'
import { colors } from 'theme'
import { logOut } from 'slices/app.slice'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
}

const DrawerMenu = (props) => {
  const dispatch = useDispatch()

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.head}>
        <FontIcon.Button
          name="times"
          size={20}
          color={colors.gray}
          backgroundColor="white"
          onPress={() => {
            props.navigation.dispatch(DrawerActions.closeDrawer())
          }}
        />
      </View>
      <View style={styles.main}>
        <Button
          title="Log out"
          color="white"
          backgroundColor={colors.purple}
          onPress={() => {
            dispatch(logOut())
          }}
        />
      </View>
    </SafeAreaView>
  )
}

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
