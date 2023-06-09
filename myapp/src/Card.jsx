import React from "react";
import style from './recipe.module.css'
const Recipe = ({title,calories,image,ingredients}) =>{
  return(
    <div className={style.recipe}>
        <h1>{title}</h1>
        <ul>
          {ingredients.map(ingredient =>( //normal para to return li
            <li>{ingredient.text}</li>
          ))}
        </ul>
        <p>Calories:{Math.floor(calories)}g</p>
        <img className={style.image} src={image} alt={title} />
        
    </div>
  )
}

export default Recipe;