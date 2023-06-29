import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import RecipeTable from "../../components/recipetable/RecipeTable";
import HeadStyle from "../../components/headStyles"
const Admin = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [recipe, setRecipe] = useState("");
  const [recipes, setRecipes] = useState(
    JSON.parse(localStorage.getItem("recipes") || "[]")
  );
  const [editing, setEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(-1);
  const [error, setError] = useState("");
  const history = useHistory();
    //xử lý sự kiện nút lưu
  const handleSave = (event) => {
    event.preventDefault();
    if (!name || !image || !recipe) {
      setError("Vui lòng nhập tất cả các trường!");
    } else if (
      recipes.some((item) => item.name.toLowerCase() === name.toLowerCase())
    ) {
      setError("Món này đã tồn tại trong danh sách!");
    } else if (!image.match(/\.(jpeg|jpg|gif|png)$/)) {
      setError("Hình ảnh phải là một đường link ảnh!");
    } else {
      //nếu đang chế độ chỉnh sửa thì cập nhật
      if (editing) {
        const newRecipe = { name, image, recipe };
        const updatedRecipes = [...recipes];
        updatedRecipes[editIndex] = newRecipe;
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        setRecipes(updatedRecipes);
        setName("");
        setImage("");
        setRecipe("");
        setEditing(false);
        setEditIndex(-1);
      } 
      //nếu không thêm món mới
      else {
        const newRecipe = { name, image, recipe };
        const updatedRecipes = recipes.concat(newRecipe);
        localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
        setName("");
        setImage("");
        setRecipe("");
        setRecipes(updatedRecipes);
      }
      setError("");
    }
  };
  //xự kiện xóa
  const handleDelete = (index) => {
    //tạo bản sao danh sách recipe
    const updatedRecipes = [...recipes];
    //loại bỏ giá trị index
    updatedRecipes.splice(index, 1);
    
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    //update lại recipe
    setRecipes(updatedRecipes);
  };

  const handleEdit = (index) => {
    const recipeToEdit = recipes[index];
    setName(recipeToEdit.name);
    setImage(recipeToEdit.image);
    setRecipe(recipeToEdit.recipe);
    const updatedRecipes = [...recipes];
    updatedRecipes.splice(index, 1);
    localStorage.setItem("recipes", JSON.stringify(updatedRecipes));
    setRecipes(updatedRecipes);
    setEditing(true);
    setEditIndex(index);
  };

  return (
    <div >
      <div class="meal-wrapper"><h2 class="title">Trang quản trị viên </h2></div>
      <form class="meal-wrapper" onSubmit={handleSave}>
        <label >
          Tên món:
          <textarea style={{ width: 500,height:50}} class="input-recipe"
            type="text"
            value={name}
            
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p></p>
        <br />
        <label>
          Hình ảnh:
          <textarea style={{ width: 500,height:50}} class="input-recipe"
            type="text"
            value={image}
            
            onChange={(e) => setImage(e.target.value)} 
          />
        </label>
        <p></p>
        <br />
        <p></p>
        <label>
          Cách chế biến:
          <textarea style={{ width: 1200, height: 400}} class="input-recipe" value={recipe} onChange={(e) => setRecipe(e.target.value)} />
        </label>
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button style={{background:"green"}}class="recipe-btn"type="submit">Lưu</button>
        
      </form>
      <button class="corner-button"onClick={() => {history.push('/'); window.location.reload(); }}>
        Quay lại
      </button>
      <RecipeTable recipes={recipes} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
};

export default Admin;
