import React, {Fragment} from 'react'

/* ESTILOS */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

/* COMPONENTES */
import Header from './components/Header'
import Footer from './components/Footer'
import ListaProductos from './components/ListaProductos'

const fecha = new Date().getFullYear();

function App() {
  return (
    <Fragment>

      <Header
        titulo= 'Tienda Virtual'
      />
    
      <ListaProductos/>
    
      <Footer 
        fecha= {fecha}
      />
    
    </Fragment>
  );
}

export default App
