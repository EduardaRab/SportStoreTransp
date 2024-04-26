import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet, Image } from 'react-native'

function Dropdown() {
    const [modal, setModal] = useState(false)
    const [opcao, setOpcao] = useState('')
    const opcoes = ['aguardando confirmação', 'em preparação', 'em rota de entrega', 'entregue']

    return (
        <View>
            <TouchableOpacity onPress={() => setModal(true)} style={styles.btn}>
                <Text>{opcao}</Text>
                <Image source={require('../assets/seta.png')}></Image>
            </TouchableOpacity>

            <Modal
                animationType='slide'
                transparent={true}
                visible={modal}
                onRequestClose={() => setModal(false)}
            >
                <TouchableOpacity
                    style={styles.modalFundo}
                    onPress={() => setModal(false)}
                >
                    <View
                        style={styles.modalContainer}
                    >
                        <FlatList
                            data={opcoes}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => {
                                    setOpcao('')
                                    setOpcao(item)
                                    setModal(false)
                                }}>
                                    <Text>{item}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(item) => item.toString()}
                        >                                                    
                        </FlatList>
                    </View>
                </TouchableOpacity>
            </Modal>
        </View>
    )
}

export default Dropdown

const styles = StyleSheet.create({
    btn:{
        width:350,
        borderRadius: 7,
        padding:8,
        fontSize:15,
        borderWidth: 1,
        borderColor: '#0B3128',
        backgroundColor: 'white',
        marginBottom: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    modalFundo:{
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        maxHeight: 600,
        minHeight: 200,
        width: 350,
    },
})