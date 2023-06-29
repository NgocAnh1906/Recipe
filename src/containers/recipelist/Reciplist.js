import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import RecipeItem from "../../components/recipeItem"
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [keyworld, setkeyworld] = useState("");
  //để lấy danh sách công thức nấu ăn từ localStorage khi thành phần được tạo ra.
  useEffect(() => {
    const recipes = JSON.parse(localStorage.getItem("recipes") || "[]");
    setRecipes(recipes);
  }, []);
  //xử lý sự kiện khi người dùng chọn một công thức nấu ăn
  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  if (selectedRecipe) {
    return (
      <div>
      
        <RecipeItem
          name={selectedRecipe.name}
          imageUrl={selectedRecipe.image}
          cookingInstructions={selectedRecipe.recipe}
          
        />
      
      <button class="corner-button" type="button" onClick={() => { window.location.href = document.referrer;; }}>Quay lại</button>
    </div>
      
    );
  }

  return (
    <div class="container">
      <div class="meal-wrapper">
        <div class="meal-search">
          <h2 class="title">Công thức nấu ăn ngon mỗi ngày</h2>
          <blockquote>Nếu bạn chưa biết nấu gì hãy tìm kiếm ở đây</blockquote>
  
          <div class="meal-search-box">
            <input
              type="text"
              class="search-control"
              placeholder="Enter an meal"
              value={keyworld}
              onChange={(e) => setkeyworld(e.target.value)}
            />
            <button type="submit" alt="Search" class="search-btn " id="search-btn">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </div>
        <div class="meal-result">
          <h2 class="title">Your Search Results:</h2>
          <div id="meal">
            { // lọc danh sách công thức nấu ăn dựa trên từ khóa và hiển thị kết quả tương ứng
              recipes
              .filter((recipe) => recipe.name.toLowerCase().includes(keyworld.toLowerCase()))
              .map((recipe) => (
                <div key={recipe.name} class="meal-item">
                  <div class="meal-img">
                    <img src={recipe.image} alt={recipe.name} />
                  </div>
                  <div class="meal-name">
                    <h3>{recipe.name}</h3>
                  </div>
                  <a href="#" class="recipe-btn" onClick={() => handleSelectRecipe(recipe)}>
                    Get Recipe
                  </a>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default RecipeList;
