import React, { Fragment } from 'react'

const Producto = ({producto}) => (
    <Fragment>
        <div className="card" style={{width: "18rem;"}}>
            <div className="card-body">
                <h5 className="card-title">{producto.id}: {producto.nombre}</h5>
                <a href="#" className="btn btn-primary">Comprar: ${producto.precio}</a>
            </div>
        </div>
    </Fragment>
)


export default Producto
