import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../componentes/header'
import CardBtn from '../componentes/cardBtn'

function Home({navigation}) {
  const [id, setId] = useState(0)

  return (
    <View style={styles.container}>
        <Header url={require('../assets/home.png')} titulo='Entregas' onPress={() => navigation.navigate('Login')}></Header>
        <ScrollView>
          <CardBtn onPress={() => navigation.navigate('Detalhes', {id: id})}></CardBtn>
        </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: 'white',
  },
})