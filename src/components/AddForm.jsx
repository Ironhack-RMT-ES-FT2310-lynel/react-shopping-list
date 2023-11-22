// imports de hooks
import { useState } from "react"

// imports de CSS
import Button from "react-bootstrap/Button"
import Form from 'react-bootstrap/Form';

function AddForm(props) {

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  const handleNameChange = (event) => {
    // console.log("usuario escribiendo", event.target.value)
    let realValue = event.target.value.toUpperCase() // ejemplo de controlar lo que escribe el usuario en el campo
    setNameValue(realValue)
    // 1. se actualiza el estado
    // 2. se renderiza de nuevo el componente
  }

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault() // eliminar cualquier comportamiento predefinido del evento
    console.log("entregando formulario")

    // Como sacamos la info del formulario?
    const newProduct = {
      name: nameValue,
      price: priceValue
    }
    console.log(newProduct)
    
    // Como incorporamos ese nuevo producto al donde estan todos los productos?
    // Como movemos esta data, de AddForm a App

    // const clone = JSON.parse(JSON.stringify(props.products))
    const clone = [...props.products]
    clone.push(newProduct)
    props.setProducts(clone)
    props.setProductsToDisplay(clone)

    // ejemplo de levantar data con la funcion liftData para 2da forma de como hacer la funcionalidad
    // props.liftData(newProduct)

  }

  return (
    <Form onSubmit={handleSubmit}>

      <h3>Formulario de crear</h3>

      <Form.Label htmlFor="name">Nombre:</Form.Label>
      <Form.Control type="text" name="name" onChange={handleNameChange} value={nameValue}/>

      <br />

      <Form.Label htmlFor="price">Precio:</Form.Label>
      <Form.Control type="number" name="price" onChange={handlePriceChange} value={priceValue}/>

      <br />

      <Button type="submit">Agregar</Button>
      

    </Form>
  )
}

export default AddForm