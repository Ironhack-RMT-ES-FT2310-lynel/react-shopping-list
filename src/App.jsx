import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ProductList from './components/ProductList'
import Search from './components/Search'

const initialState = [
  { name: "agua", price: 2 },
  { name: "café", price: 3 },
]



function App() {
  
  // el estado de TODOS los productos
  const [ products, setProducts ] = useState(initialState)
  
  // el estado SOLO de los productos que se van a visualizar
  const [ productsToDisplay, setProductsToDisplay ] = useState(initialState)

  // ejemplo 2 de como hacer funcionalidad de agregar productos
  const liftData = (data) => {
    console.log(data)
    // luego hacemos el clone del estado
    // luego el push
    // luego el setState
  }
  
  // en react existen unas etiquetas llamadas Fragmentos de React
  return (
    <>
      <h1>Lista de Compras</h1>

      <hr />

      <AddForm 
        products={products} 
        setProducts={setProducts}
        setProductsToDisplay={setProductsToDisplay}
        liftData={liftData}
      />

      <hr />

      <Search 
        products={products} 
        setProductsToDisplay={setProductsToDisplay}
      />

      <hr />

      <ProductList productsProp={productsToDisplay}/>

    </>
  )
}

export default App
