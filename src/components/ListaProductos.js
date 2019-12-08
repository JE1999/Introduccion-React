import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProductos extends Component {

    state = {
        productos: [
            {id: 1, nombre: 'Camisa React', precio: 82},
            {id: 2, nombre: 'Camisa Vuejs', precio: 69},
            {id: 3, nombre: 'Camisa Angular', precio: 24},
            {id: 4, nombre: 'Camisa NodeJS', precio: 81}
        ]
    }

    render() {

        const {productos} = this.state

        return (
            <Fragment>
                <h3>Lista de productos</h3>
                {productos.map(producto => (
                    <Producto
                        key={producto.id}
                        producto= {producto}
                    />   
                ))}  
            </Fragment>
        );
    }
}

export default ListaProductos;