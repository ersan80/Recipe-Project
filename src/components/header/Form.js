import React, { useState } from "react";

import axios from "axios";
import RecipeCard from "../recipe/RecipeCard";
import styles from "./Header.module.css";
import Details from "../details/Details";

const Form = () => {
  const APP_ID = "42c80eaf";
  const APP_KEY = "9e51e8449033b1c2ea78b947af7bcdb1";
  const [query, setQuery] = useState();
  const [meal, setMeal] = useState([]);
  const [data, setData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    await axios
      .get(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`
      )
      .then((res) => setData(res.data.hits));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.container}>
        <input
          className={styles.input}
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Search"
          name="search"
          id="search"
        />
        <button className={styles.search} type="submit">
          Search
        </button>
        <select
          className={styles.input}
          onChange={(e) => setMeal(e.target.value)}
          name=""
          id=""
        >
          <option value="Breakfast">Breakfast</option>
          <option value="Dinner">Dinner</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </select>
      </form>
      <RecipeCard data={data}></RecipeCard>
      
      
    </div>
  );
};

export default Form;
