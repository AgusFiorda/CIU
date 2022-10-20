import React from 'react';

const Footer = (props) => {
  //Aca va el codigo javascript
  const fecha = new Date().getFullYear();

  return ( 
    <div>
      <p>Aca van las redes sociales por ejemplo {props.red} y los derechos de autor</p>
      <p>Año {fecha}</p>
    </div>
  );
}
 
export default Footer