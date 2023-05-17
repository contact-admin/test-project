import { Text, FlatList } from 'react-native'
import React from 'react'

const list = ({products}) => {
  return (
    <FlatList
    data={products}
    renderItem={({item})=>{
        console.log(item)
        return <Text>{item.title}</Text>
    }}
    />
  )
}

export default list