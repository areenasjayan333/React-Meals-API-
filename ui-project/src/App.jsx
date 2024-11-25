import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [value, setValue] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        setIsLoading(true);
        const result = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );

        setValue(result.data.meals);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetch();
  }, []);

  return isLoading ? (
    <div className="loader">
      <div
        class="spinner-grow text-warning d-flex align-items-center justify-content-center "
        role="status"
      ></div>
     
    </div>
  ) : (
    <div className="m-3 row ">
      <h1 className="fw-bold text-center">Meals App UI</h1>
      {value.map((item) => (
        <div className="col-lg-3 col-md-6 col-12 p-3 ">
          <div className="main-card p-3 bg-white rounded-4">
            <img
              className="meal-image img-fluid mb-3 bg-white rounded-3"
              src={item.strMealThumb}
              alt="meal-image"
            />
            <h5 className="mb-2 bg-white fw-bold">{item.strMeal}</h5>
            <div id="container" className="meal-description bg-white pe-3">
              <div id="content" className="bg-white">
                {item.strInstructions}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
