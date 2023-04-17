import React, { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import uuid from 'react-uuid'

function ListDani() {

    const [tareitas, setTareitas] = useState([]);
    const [tareaInput, setTareaInput] = useState("");
    const [modoEdicion, setModoEdicion] = useState(false);
    const [tareaAEditar, setTareaAEditar] = useState(null);


    const onInputChange = (e) => {
        setTareaInput(e.target.value);
    };

    const onInputAEditarChange = (e) => {
        setTareaAEditar({...tareaAEditar, nombre: e.target.value});
    }

    const borrarTarea = (dlt) => {
        const arrayNuevis = tareitas.filter((valor) => valor.id !== dlt);
        setTareitas(arrayNuevis);
    }

    const agregarTarea = (e) => {
        e.preventDefault();
        setTareitas([...tareitas, {id: uuid(), nombre: tareaInput}]);
        setTareaInput("")
    };

    const actualizarTarea = (e) => {
        e.preventDefault();
        const nuevoArray = tareitas.map((valor) =>
        valor.id === tareaAEditar.id ? tareaAEditar : valor
        );
        setTareitas(nuevoArray);
        setModoEdicion(false);
        setTareaAEditar(null);
    }

    const editarTarea = ((tarea) => {
        setModoEdicion(true);
        setTareaAEditar(tarea)
    })

    return (
        <Container fluid>
            <h1 className="text-center mt-4">LISTITA LISTA</h1>
            <Row>

            <Col xs={12} md={4}>
                <h4 className="text-center mt-4 mb-3">¿Tenés una tareita?</h4>
                <Form onSubmit={modoEdicion ? actualizarTarea : agregarTarea}>
                    <Form.Group>
                        <Form.Control
                        type="text"
                        className="mb-2"
                        placeholder="Agregá la tareita, rey"
                        onChange={modoEdicion ? onInputAEditarChange : onInputChange}
                        value={tareaAEditar ? tareaAEditar.nombre : tareaInput} />
                    </Form.Group>
                    <Button type="submit" variant="dark" className="w-100">{modoEdicion ? "Actualizar" : "Agregar"}</Button>
                </Form>
                </Col>

                <Col xs={12} md={8}>
                <h4 className="text-center mt-4 mb-3">Tareitas</h4>
                <ListGroup as="ul">

                    {tareitas.length > 0 ? (
                        tareitas.map((valor) => (
                        <ListGroup.Item as="li" key={valor.id} className="mb-1 mt-1">
                        <span className="lead">{valor.nombre}</span>
                        <Button variant="danger" size="sm" className="float-end" onClick={() => borrarTarea(valor.id)}>Borrar</Button>
                        <Button variant="warning" size="sm" onClick={() => editarTarea(valor)} className="float-end mx-2">Editar</Button>
                    </ListGroup.Item>)
                    )) : (
                        <ListGroup.Item as="li">
                        <span className="lead">Nada por aquí</span>
                    </ListGroup.Item>
                    )}
                </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default ListDani;