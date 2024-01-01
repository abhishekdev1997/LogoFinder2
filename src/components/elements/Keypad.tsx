import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

type KeypadProps = {
    charsArray: string[]
    onPress: (item: string) => void
}

const Keypad = ({ charsArray, onPress }: KeypadProps) => {
    return (
        <View style={styles.container}>
            {charsArray.map((item, index) => {
                return (
                    <TouchableOpacity onPress={() => onPress(item)} style={styles.button} key={index}>
                        <Text style={styles.label}>{item}</Text>
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        margin: 4,
        backgroundColor: "blue",
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: "white",
    }
})

export default Keypad