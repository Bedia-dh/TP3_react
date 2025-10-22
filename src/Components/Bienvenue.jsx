import React from 'react';

// Définition du composant Bienvenue
function Bienvenue(props) {
  return (
    <h2>Bienvenue, {props.nom} !</h2>
  );
}

// Export du composant pour l’utiliser ailleurs
export default Bienvenue;
