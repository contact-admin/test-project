import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';
import { getProducts } from '../api';
import {list} from '../components/list'

const HomeScreen = () => {
    const [products, setProduct] = useState([])
    const load = async () =>{
        const data = await getProducts()
        setProduct(data)
    }
    useEffect(() =>{
      console.log('cargo')
        //load()
    }, [])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!</Text>
      <Image source={{uri:'https://picsum.photos/seed/picsum/200/200'}} style={styles.image} />
      <list products= {products}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
      color:'#c82a54',
      fontSize: 30,
      margin:10
    },
    image:{
      height:200,
      width: 200,
      borderRadius:100,
      margin:10
    },
  });
  
export default HomeScreen
