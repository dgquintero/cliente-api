import React from 'react';


const Navegacion = () => {
  return (  
      <aside class="sidebar col-3">
      <h2>Administración</h2>

      <nav class="navegacion">
          <a href="index.html" className="clientes">Clientes</a>
          <a href="productos.html" className="productos">Productos</a>
          <a href="pedidos.html" className="pedidos">Pedidos</a>
      </nav>
    </aside>
  );
}
 
export default Navegacion;
