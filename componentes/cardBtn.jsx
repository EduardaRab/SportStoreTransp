import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Texto from './texto'
import Subtitulo from '../componentes/subtitulo'
import BtnImagem from './btnImagem'


function CardBtn({cliente, endereco, id, data, onPress}) {
  return (
    <View style={styles.container}>
        <View style={styles.data}>
            <Subtitulo txt={data}></Subtitulo>
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
            <BtnImagem url={require('../assets/lapis.png')} onPress={onPress}></BtnImagem>
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