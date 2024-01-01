import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useMycontext, useSuccessGuess } from '../../hooks'
import { BoxInput } from '..';
import data from '../../data/data.json';

const NameInput = () => {
    const [refreshKey, setRefreshKey] = useState(0);
    const context = useMycontext();
    const name = data[context.value.currentIndex]?.name;
    const reLoad = () => {
        setRefreshKey((prevKey) => prevKey + 1);
    }
    useSuccessGuess(name, reLoad);

    return (
        <View key={refreshKey}>
            <BoxInput length={name?.length} value={context.value.value} />
        </View>
    );
}

export default NameInput