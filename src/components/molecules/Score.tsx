import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { useMycontext } from '../../hooks';

const Score = () => {
    const context = useMycontext();

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Score: {context.value.score}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        width: "100%",
        alignItems: "center"
    },
    text: {
        color: "white"
    }
})

export default Score