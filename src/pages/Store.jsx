import { useState } from "react";
import SearchBar from "../components/SearchBar";
import Container from "../components/Container";

const initialProducts = [
  { id: 1, name: "Zapatillas Deportivas", category: "Zapatos", price: 59.99 },
  { id: 2, name: "Camiseta Básica", category: "Camisetas", price: 19.99 },
  { id: 3, name: "Gorra de Béisbol", category: "Accesorios", price: 14.99 },
  { id: 4, name: "Abrigo de Lana", category: "Abrigos", price: 89.99 },
  { id: 5, name: "Sandalias", category: "Zapatos", price: 29.99 },
  { id: 6, name: "Camiseta Gráfica", category: "Camisetas", price: 24.99 },
  { id: 7, name: "Bufanda", category: "Accesorios", price: 12.99 },
  { id: 8, name: "Chaqueta de Cuero", category: "Abrigos", price: 129.99 },
];

const Store = () => {
  const products = [...initialProducts];
  const [category, setCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  function handleSearchChange(newSearch) {
    setSearch(newSearch);
  }

  function handleCategoryChange(newCategory) {
    setCategory(newCategory);
  }
  return (
    <div style={{ padding: "20px" }}>
      <h2>Productos</h2>
      <SearchBar
        category={category}
        handleCategoryChange={handleCategoryChange}
        search={search}
        handleSearchChange={handleSearchChange}
      />
      <Container items={products} category={category} search={search} />
    </div>
  );
};

export default Store;
