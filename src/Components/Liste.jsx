import React, { useState } from "react";

function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [nouvelArticle, setNouvelArticle] = useState("");

  function ajouterArticle() {
    if (nouvelArticle.trim() === "") return; // empêche d’ajouter un champ vide

    setArticles([...articles, nouvelArticle]);

    setNouvelArticle("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>🛒 Liste de courses</h2>

      {/* Champ de saisie */}
      <input
        type="text"
        placeholder="Ajouter un article..."
        value={nouvelArticle}
        onChange={(e) => setNouvelArticle(e.target.value)}
      />

      {/* Bouton pour ajouter */}
      <button onClick={ajouterArticle} style={{ marginLeft: "10px" }}>
        Ajouter
      </button>

      {/* Affichage de la liste */}
      <ul style={{ listStyleType: "none", padding: 0, marginTop: "20px" }}>
        {articles.map((article, index) => (
          <li key={index}>✅ {article}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListeCourses;
