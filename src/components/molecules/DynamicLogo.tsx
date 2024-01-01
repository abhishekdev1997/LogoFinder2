import { View, Text } from 'react-native'
import React from 'react'
import { Logo } from ".."
import { useMycontext } from '../../hooks'
import data from "../../data/data.json";

const DynamicLogo = () => {
  const contex = useMycontext()
  return (
    <View>
      <Logo uri={data[contex.value.currentIndex]?.imgUrl} />
    </View>
  )
}

export default DynamicLogo