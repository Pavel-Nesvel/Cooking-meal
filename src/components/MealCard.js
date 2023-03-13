import React, { useState } from "react";
import "../styles/mealCard.css";

export const MealCard = ({ meal }) => {
  const [showModal, setShowModal] = useState(false);
  const ingredients = [];
  for (let i = 1; i < 21; i++) {
    if (meal[`strIngredient${i}`]) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      ingredients.push(`${ingredient}  - ${measure} `);
    }
  }

  return (
    <div className="meal-card">
      <div className="meal-content">
        <h2>{meal.strArea}</h2>
        <h3>{meal.strCategory} </h3>
        <p>Origine : {meal.strArea}</p>
        <img src={meal.strMealThumb} alt="" />
        <p>{meal.strInstructions}</p>
      </div>

      {showModal ? (
        <div className="modal" onClick={() => setShowModal(false)}>
          <h1>{meal.strTags}</h1>
          <ul>
            <h2>Compositions</h2>

            {ingredients.map((ingredient, key) => (
              <li key={key}>{ingredient}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <button className="seeMore" onClick={() => setShowModal(true)}>
        Voir plus
      </button>
    </div>
  );
};
