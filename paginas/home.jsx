import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../componentes/header'
import CardBtn from '../componentes/cardBtn'

function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Header url={require('../assets/home.png')} titulo='Entregas' onPress={() => navigation.navigate('Login')}></Header>
        <ScrollView>
          <CardBtn></CardBtn>
          <CardBtn></CardBtn>
          <CardBtn></CardBtn>
          <CardBtn></CardBtn>
          <CardBtn></CardBtn>
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