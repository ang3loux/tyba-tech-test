import React from 'react'
import {
  StyleSheet, View, StatusBar, FlatList, Text,
} from 'react-native'
import { useSelector } from 'react-redux'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  list: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    marginTop: 4,
    padding: 4,
    fontSize: 14,
  },
})

const History = () => {
  const { queries } = useSelector((state) => state.brewer)
  console.log(queries)
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />

      <Text style={styles.title}>Recent searches</Text>

      <FlatList
        style={styles.list}
        data={queries}
        renderItem={({ item, index }) => (
          <Text style={styles.item} key={`${index}${item}`}>
            {item}
          </Text>
        )}
      />
    </View>
  )
}

export default History
