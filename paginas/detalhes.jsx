import React from 'react'
import { View, Text } from 'react-native'

function Detalhes({navigation, route}) {
  const {id} = route.params
  
  return (
    <View>
        <Text>DETALHES</Text>
    </View>
  )
}

export default Detalhes