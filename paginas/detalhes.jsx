import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Header from '../componentes/header'
import Subtitulo from '../componentes/subtitulo'
import Input from '../componentes/input'
import Label from '../componentes/label'
import Dropdown from '../componentes/dropdown'
import CardGrande from '../componentes/cardGrande'
import Botao from '../componentes/botao'

function Detalhes({navigation, route}) {
  // const {id} = route.params //recebendo o id do produto
  const [cliente, setCliente] = useState('Giovana')
  const [pedido, setPedido] = useState('Pedido 1')
  const [cep, setCep] = useState('13170-023')
  const [numero, setNumero] = useState('3965')
  const [status, setStatus] = useState('')

  return (
    <View style={styles.container}>
        <Header url={require('../assets/pedido.png')} titulo='Detalhes da entrega' onPress={() => navigation.navigate('Login')}></Header>
        <View style={styles.conteudo}>
          <Subtitulo txt='Informações'></Subtitulo>
          <Label txt='Cliente'></Label>
          <Input placeholder={cliente} onChangeText={setCliente}></Input>
          <Label txt='Pedido'></Label>
          <Input placeholder={pedido} onChangeText={setPedido}></Input>
          <Label txt='CEP'></Label>
          <Input placeholder={cep} onChangeText={setCliente}></Input>
          <Label txt='Número'></Label>
          <Input placeholder={numero} onChangeText={setNumero}></Input>
          <Label txt='Status'></Label>       
          <Dropdown></Dropdown>
          <Botao txt='ATUALIZAR'></Botao>
          <Subtitulo txt='Produtos'></Subtitulo>
          <ScrollView>
            <CardGrande></CardGrande>          
            <CardGrande></CardGrande>          
            <CardGrande></CardGrande>          
            <CardGrande></CardGrande>          
            <CardGrande></CardGrande>          
          </ScrollView>
        </View>
    </View>
  )
}

export default Detalhes

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  conteudo:{
    padding: 13,
    paddingTop: 0,
    paddingBottom: 0,
  }
})