import { View, TextInput, StyleSheet } from 'react-native'
import React, { RefObject, useEffect, useRef, useState } from 'react'

type BoxInputProps = {
    length: number,
    value: string
}

const BoxInput = ({ length = 5, value }: BoxInputProps) => {
    const refs: RefObject<TextInput[] | null[]> = useRef([])
    const [currentFocus, setCurrentFocus] = useState(0)


    useEffect(() => {
        if (value && refs.current && refs.current[currentFocus]) {
            refs.current[currentFocus]?.setNativeProps({ text: value[currentFocus] })
            setCurrentFocus(currentFocus + 1)
        }
    }, [value])


    useEffect(() => {
        if (refs.current && refs.current[currentFocus]) {
            refs.current[currentFocus]?.focus()
        }
    }, [currentFocus])

    return (
        <View style={styles.container}>
            {Array.from({ length }).map((_, index) => {
                return (
                    <View key={index} style={styles.box}>
                        <TextInput
                            onFocus={() => setCurrentFocus(index)}
                            showSoftInputOnFocus={false}
                            ref={(element) => {
                                if (refs.current) {
                                    refs.current[index] = element;
                                }
                            }} />
                    </View>
                )
            })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    box: {
        borderWidth: 1,
        borderColor: "black",
        height: 50,
        width: 50,
    }
})

export default BoxInput