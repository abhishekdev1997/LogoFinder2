import { View, Text } from 'react-native';
import React from 'react'
import { Keypad } from '..';
import { useMycontext, useUniqueKeys } from '../../hooks';
import { UPDATE } from '../../utils/constants';


const UniqueKeyboard = () => {
    const { uniqueKeys } = useUniqueKeys();
    const context = useMycontext();

    const onPress = (char: string) => {
        context.dispatch({ type: UPDATE, payload: char })
    }

    return (
        <View>
            <Keypad onPress={(char) => onPress(char)} charsArray={uniqueKeys} />
        </View>
    )
}

export default React.memo(UniqueKeyboard);