// imports de hooks
import { useState } from "react";

// imports de CSS
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Toast from "react-bootstrap/Toast";

function AddForm(props) {
  const [nameValue, setNameValue] = useState("");
  const [priceValue, setPriceValue] = useState(0);

  const [show, setShow] = useState(false);

  const handleNameChange = (event) => {
    // console.log("usuario escribiendo", event.target.value)
    let realValue = event.target.value.toUpperCase(); // ejemplo de controlar lo que escribe el usuario en el campo
    setNameValue(realValue);
    // 1. se actualiza el estado
    // 2. se renderiza de nuevo el componente
  };

  const handlePriceChange = (event) => {
    setPriceValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // eliminar cualquier comportamiento predefinido del evento
    console.log("entregando formulario");

    if (nameValue === "" || priceValue === 0) {
      setShow(true)
      return // return es deten la funcion.
    }

    // Como sacamos la info del formulario?
    const newProduct = {
      name: nameValue,
      price: priceValue,
    };
    console.log(newProduct);

    // Como incorporamos ese nuevo producto al donde estan todos los productos?
    // Como movemos esta data, de AddForm a App

    // const clone = JSON.parse(JSON.stringify(props.products))
    const clone = [...props.products];
    clone.push(newProduct);
    props.setProducts(clone);
    props.setProductsToDisplay(clone);

    // ejemplo de levantar data con la funcion liftData para 2da forma de como hacer la funcionalidad
    // props.liftData(newProduct)
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3>Formulario de crear</h3>

      <Form.Label htmlFor="name">Nombre:</Form.Label>
      <Form.Control
        type="text"
        name="name"
        onChange={handleNameChange}
        value={nameValue}
      />

      <br />

      <Form.Label htmlFor="price">Precio:</Form.Label>
      <Form.Control
        type="number"
        name="price"
        onChange={handlePriceChange}
        value={priceValue}
      />

      <br />

      <Button type="submit">Agregar</Button>

      <Toast bg={"danger"} onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <Toast.Header>
          <strong className="me-auto">Error de formulario</strong>
          <small>Espabila</small>
        </Toast.Header>
        <Toast.Body>Los campos deben estar llenos y mayor a 0</Toast.Body>
      </Toast>

    </Form>
  );
}

export default AddForm;
