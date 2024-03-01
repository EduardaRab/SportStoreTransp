import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './texto'
import Subtitulo from '../componentes/subtitulo'
import BtnImagem from './btnImagem'


function CardBtn({cliente1, endereco1, id, data, navigation}) { // apagar o 1
    const [cliente, setCliente]  = useState('Giovana Radaeli')
    const [endereco, setEndereco] = useState('Av. Rebouças, 3965 - Jardim Sao Carlos, Sumaré - SP, 13170-023')

    const buscar = () => {
        navigation.navigate('Detalhes', {id: id})
    }

  return (
    <View style={styles.container}>
        <View style={styles.data}>
            <Subtitulo txt='20/01/2024'></Subtitulo>
        </View>
        <View>
            <View style={styles.cliente}>
                <Texto txt={`Cliente: ${cliente}`}></Texto> 
            </View>
            <View style={styles.endereco}>
                <Texto txt={`Endereço: ${endereco}`}></Texto>
            </View>
        </View>
        <View style={styles.btn}>
            <BtnImagem url={require('../assets/lapis.png')} onPress={buscar}></BtnImagem>
        </View>
    </View>
  )
}

export default CardBtn

const styles = StyleSheet.create({
    container:{
        width: '90%',
        alignSelf: 'center',
        marginTop: '3%',
        borderWidth: 2,
        borderColor: '#3D5920',
        borderRadius: 5,
        padding: '3%'
    },
    data:{
        borderBottomColor: '#CDD971',
        borderBottomWidth: 2,
    },
    cliente:{
        marginBottom: 2,
        marginTop: 13,
    },
    endereco:{
        marginBottom: 20,
    },
    btn:{
        alignSelf: 'flex-end'
    }
  })