import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TextInput } from 'react-native'
import { colors } from 'theme'

const styles = {
  input: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: colors.darkPurple,
    borderWidth: 1,
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
  },
}

const Input = ({
  label, style, labelStyle, inputStyle, ...inputProps
}) => {
  const labelSty = [styles.label, labelStyle]
  const inputSty = [styles.input, inputStyle]

  return (
    <View style={style}>
      {label && <Text style={labelSty}>{label}</Text>}
      <TextInput
        style={inputSty}
        placeholderTextColor={colors.gray}
        {...inputProps}
      />
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  style: PropTypes.shape({}),
  labelStyle: PropTypes.shape({}),
  inputStyle: PropTypes.shape({}),
}

Input.defaultProps = {
  label: null,
  style: {},
  labelStyle: {},
  inputStyle: {},
}

export default Input
