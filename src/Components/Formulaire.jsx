import React, { useState } from "react";

function Formulaire() {
 
  const [nom, setNom] = useState("");

 
  function handleSubmit(event) {
    event.preventDefault(); 
    alert(`Bonjour, ${nom} !`);
  }

 
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Entrez votre nom :
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)} // met à jour l’état à chaque frappe
        />
      </label>
      <button type="submit">Dire Bonjour</button>
    </form>
  );
}

export default Formulaire;
