import React from 'react';

const RecipeItem = ({ name, imageUrl, cookingInstructions }) => {
    return (
        <div class="container">
            <div class = "meal-wrapper">
            <div class="meal-item">
                <div class = "recipe-image"><img src={imageUrl} alt={`Hình ảnh ${name}`}/></div>
                
            </div>
            <div class = "meal-name"><h3>{name}</h3></div> 
            <div><p>{cookingInstructions}</p></div>
            </div>
        </div>
    );
  };

export default RecipeItem;