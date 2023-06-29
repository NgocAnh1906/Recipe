import React from "react";
import{
  Table,
  TH,
  TD,
  TR,
  Image
} from "./TableStyle"
const RecipeTable = ({ recipes ,handleDelete ,handleEdit}) => {

  
  return (
    <Table >
      <thead>
        <TR >
          <TH>Tên món</TH>
          <TH>Hình ảnh</TH>
          <TH>Cách chế biến</TH>
          <TH>Action</TH>
        </TR>
      </thead>
      <tbody>
        {recipes.map((recipe, index) => (
          <TR key={index}>
            <TD class="meal-name">{recipe.name}</TD>
            <img style={{height:200}} src={recipe.image} alt={recipe.name} class="meal-image" />
            <TD>{recipe.recipe}</TD>
            <TD>
            <button class="button-opption" onClick={() => handleEdit(index)}>Sửa</button>
            <p></p>
            <button class="button-opption" onClick={() => handleDelete(index)}>Xóa</button>
            </TD>
            
          </TR>
        ))}
      </tbody>
    </Table>
  );
};

export default RecipeTable;