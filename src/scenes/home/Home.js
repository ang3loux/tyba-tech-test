import React, { useState } from 'react'
import {
  StyleSheet, View, StatusBar, FlatList, Text,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import Input from 'components/Input'
import Button from 'components/Button'
import { colors } from 'theme'
import { fetchBreweries } from 'slices/brewer.slice'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lightGrayPurple,
  },
  search: {
    flexDirection: 'row',
    padding: 8,
  },
  searchInput: {
    flex: 1,
    marginRight: 4,
  },
  list: {
    flex: 1,
    marginTop: 8,
    padding: 8,
  },
  item: {
    marginTop: 4,
    padding: 4,
    fontSize: 14,
  },
})

const Home = () => {
  const { breweries } = useSelector((state) => state.brewer)
  const dispatch = useDispatch()

  const [query, setQuery] = useState('')

  const isValid = query.length > 3

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <View style={styles.search}>
        <Input
          style={styles.searchInput}
          placeholder="Find your nearest brewery"
          onChangeText={(value) => setQuery(value)}
        />
        <Button
          title="Search"
          disabled={!isValid}
          color="white"
          backgroundColor={colors[isValid ? 'purple' : 'lightPurple']}
          onPress={() => {
            dispatch(fetchBreweries(query))
          }}
        />
      </View>
      <FlatList
        style={styles.list}
        keyExtractor={(item) => `${item.id}`}
        data={breweries}
        renderItem={({ item }) => (
          <Text style={styles.item} key={`${item.id}`}>
            {item.name}
          </Text>
        )}
      />
    </View>
  )
}

export default Home
