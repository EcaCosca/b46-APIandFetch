import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [products, setProducts] = useState(null)

  useEffect(()=>{
    getData()
  },[])

  // EXAMPLE USING ASYNC AND AWAIT
  // const getData = async () => {
  //   const res = await fetch('https://fakestoreapi.com/products')
  //   const data = await res.json()
  //   console.log(data)
  // }
  
  // EXAMPLE USING THEN
  const getData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => setProducts(data))
    .catch(err => console.log(err))
  }

  const getSingleProduct = (id) => {
    console.log(id)
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(response => response.json())
    .then(data => setProducts([data]))
    .catch(err => console.log(err))
  }


  return (
    <>
      <h1>Fake Store</h1>
      <button onClick={()=>{getSingleProduct(3)}}>Get Jacket</button>
      {
        !products ? 
        <h2>Loading...</h2>
        :
        products.map(product => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
        </div>
      ))
      }
    </>
  )
}

export default App
