import Product from "./Product"

function ProductList(props) {
  return (
    <div>
      
      <h3>Productos</h3>

      {props.productsProp.map((eachProduct, index) => {
        return <Product key={index} patata={eachProduct}/>
      })}

      {/* <Product />
      <Product />
      <Product /> */}

    </div>
  )
}

export default ProductList