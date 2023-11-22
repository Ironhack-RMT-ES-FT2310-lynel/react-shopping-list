import { useState } from "react"

function Search(props) {

  const [ queryValue, setQueryValue ] = useState("")

  const handleQueryChange = (event) => {
    setQueryValue(event.target.value)

    // en el momento que el usuario cambia el campo...
    console.log(event.target.value)
    // ... deberiamos filtrar todos los productos del estado.
    const clone = [...props.products]
    const filteredArr = props.products.filter((eachProduct) => {
      // si aplicamos toLowerCase a todo podemos hacer que no afecten mayusculas y minusculas
      if (eachProduct.name.includes(event.target.value)) {
        return true
      } else {
        return false
      }
    })

    props.setProductsToDisplay(filteredArr)

  }

  return (
    <div>
      
      <label htmlFor="query">Buscar:</label>
      <input 
        type="text" 
        name="query" 
        onChange={handleQueryChange} 
        value={queryValue}
      />


    </div>
  )
}

export default Search