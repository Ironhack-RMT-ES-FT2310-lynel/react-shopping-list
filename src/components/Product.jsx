
function Product({ patata: {name, price} }) {
  
  // const { name, price } = props.patata

  return (
    <div>
      
      <h3>{name}</h3>
      <p>precio: {price}</p>

    </div>
  )
}

export default Product