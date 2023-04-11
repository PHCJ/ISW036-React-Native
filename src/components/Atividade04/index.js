import React, { useState } from 'react'
import { Text, Button, StyleSheet, View } from 'react-native'

export default comp => {
    const [numero1, setNumero1] = useState(0)
    const [numero2, setNumero2] = useState(2)
    const inc1 = () => setNumero1(numero1 + 25)
    const dec1 = () => setNumero1(numero1 - 25)
    const inc2 = () => setNumero2(numero2 * 2)
    const dec2 = () => setNumero2(numero2 / 2)
    return (
        <View style={styles.container}>
            <>
                <Text style={styles.fontGrande}>
                    {numero1}
                </Text>
                <Button title=' + ' onPress={inc1} />
                <Button title=' - ' onPress={dec1} />
            </>

            <>
                <Text style={styles.fontGrande}>
                    {numero2}
                </Text>
                <Button title=' + ' onPress={inc2} />
                <Button title=' - ' onPress={dec2} />
            </>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#AC9",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    fontGrande: {
        fontSize: 30,
    },
    fontMedia: {
        fontSize: 20,
        fontFamily: 'Arial',
    },
});
