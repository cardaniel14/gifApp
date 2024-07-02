import { useState } from "react";
import { PropTypes } from "prop-types";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory, categories }) => {
  const [inputValue, setInputValue] = useState("");
  const onInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const prevent = (e) => {
    e.preventDefault();
    if (inputValue.trim() <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  const minus = categories.map((item) => {
    return item.toLowerCase();
  });
  return (
    <>
      <form onSubmit={prevent}>
        <input
          type="text"
          placeholder="Buscar Gifs"
          value={inputValue}
          onChange={onInputChange}
        />
      </form>
      {minus.includes(inputValue.toLowerCase()) ? (
        <p>La categoria ya existe</p>
      ) : (
        <p>Total de categorias: {categories.length}</p>
      )}
    </>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};
