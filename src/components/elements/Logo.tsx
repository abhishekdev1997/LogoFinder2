import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type LogoProps = {
    uri: string
}

const Logo = ({ uri }: LogoProps) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image}
                source={{ uri: uri }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: 100,
        height: 100
    }
})

export default Logo