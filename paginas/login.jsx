import React, {useState} from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { CheckBox } from 'react-native-elements'
import Titulo from '../componentes/titulo'
import Texto from '../componentes/texto'
import Input from '../componentes/input'
import Botao from '../componentes/botao'

function Login({navigation}) {
  const [selecionado, setSelecionado] = useState(false)
  const [cnpj, setCnpj] = useState(0)
  const [senha, setSenha] = useState('')

  const entrar = () => {
    console.log(cnpj)
    console.log(senha)
    if (selecionado){
      console.log('Selecionado')
    }
    else{
      console.log('Não selecionado')
    }
    navigation.navigate('Tabs') // Navegar para a tela que contém a Bottom Tab Navigator e que abrirá diretamente a home
  }
  

  return (
    <View style={styles.container}>
      <Image source={require('../assets/perfil.png')} style={styles.imagem}></Image>
      <Titulo txt='Conectando'></Titulo>
      <Texto txt='Continue com seus dados'></Texto>
      <View style={styles.inputs}>
        <Input placeholder={'CNPJ'} onChangeText={setCnpj} type={'numeric'} value={cnpj}></Input>
        <Input placeholder={'Senha'} onChangeText={setSenha} value={senha} type={'text'} secureTextEntry={true}></Input>
      </View>
      <Botao txt='ENTRAR' onPress={entrar}></Botao>
      <CheckBox
        title='Lembre-se de mim'
        checked={selecionado}
        onPress={() => setSelecionado(!selecionado)}
        containerStyle={styles.checkboxContainer}
        checkedColor='#3D5920'
      ></CheckBox>
      <Image source={require('../assets/login.png')} style={styles.img}></Image>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  imagem:{
    width: 88,
    height: 88,
  },
  inputs:{
    marginTop: 25,
  },
  btn:{
    marginTop: 20,
    marginBottom: 10,
  },
  checkboxContainer:{
    backgroundColor: 'transparent',
    borderWidth: 0,
    margin: 20,
  },
  img:{
    width: 350,
    height: 256.75
  },
})