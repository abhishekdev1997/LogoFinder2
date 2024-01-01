import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const GameOver = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.font}>GameOver!!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignItems: 'center'
    },
    font: {
        color: "white",
        fontSize: 40
    }
})

export default GameOver