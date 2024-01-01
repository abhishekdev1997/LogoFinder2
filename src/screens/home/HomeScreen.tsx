import { View, Text } from 'react-native';
import React, { useState } from 'react';
import styles from './HomeScreen.style';
import { Logo, UniqueKeyboard, NameInput, DynamicLogo, Score, GameOver } from '../../components';
import { useMycontext } from '../../hooks';

const HomeScreen = () => {
    const context = useMycontext()

    return (
        <View style={styles.container}>
            {context.value.isOver ? <GameOver /> :
                <View style={styles.inner_container}>
                    <DynamicLogo />
                    <NameInput />
                    <UniqueKeyboard />
                    <Score />
                </View>}
        </View>
    )
}

export default HomeScreen