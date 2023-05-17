const API = 'http://10.4.3.140:4000/api/productos'
export const getProducts = async () =>{
    const res = await fetch(API) //llamar una petición http
    return res.json()
}