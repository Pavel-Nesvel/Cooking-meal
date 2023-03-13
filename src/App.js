import axios from "axios";
import { useState, useEffect } from "react";
import { MealCard } from "./components/MealCard";
import "./styles/header.css";

function App() {
  const [mealData, setMealData] = useState([]);
  const[search,setSearch]=useState("")
  useEffect(() => {
    axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    .then(({data}) =>setMealData(data.meals));
  }, [search]);
  console.log(mealData);
  return (
    <div className="app-container">
        <h1>React Meal Reciepts </h1>
       <div className="search-input">
       <input
          className="input-search"
          type="text"
          id="rectte"
          value={search}
          placeholder="tapez le nom d'un aliment (en anglais)"
          onChange={(e)=>setSearch(e.target.value)}   
        />
        <div  className="wife-off" onClick={()=>setSearch("")}>x</div>
       </div>
   <div className="meal-container">
   {mealData ?mealData.map((meal,key)=>{
       return  <MealCard meal={meal} key={key} />
   }): <p className="no-result">Pas de recette trouvé pour : {search} </p>}
   </div>
    </div>
  );
}

export default App;
