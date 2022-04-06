
import { useLocation, useParams } from "react-router-dom";
const Details = () => {
  const location = useLocation();
  console.log(location.state.recipe);

  return (

      <div className="card mb-3" style={{maxWidth: "840px"}}>
        <div class="row g-0">
          <div class="col-md-4">
            <h1>{location.state.recipe.label}</h1>
            <img
              src={location.state.recipe.image}
              class="img-fluid rounded-start"
              alt="."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Ingredients</h5>
              {location.state.recipe.ingredientLines.map((ing, index) => {
                return (
                  <p className="card-text" key={index}>
                    {ing}
                  </p>
                );
              })}
              <h5>Calories: {Math.round(location.state.recipe.calories)}</h5>
              <h5>
                Total Weight: {Math.round(location.state.recipe.totalWeight)}gr
              </h5>
              <h5>
                Calcium:{" "}
                {Math.round(location.state.recipe.totalDaily.CA.quantity)}mg
              </h5>
              <h5>
                Cholesterol:{" "}
                {Math.round(location.state.recipe.totalDaily.CHOLE.quantity)}mg
              </h5>
              <h5>
                Fat: {Math.round(location.state.recipe.totalDaily.FAT.quantity)}
              </h5>


            </div>
          </div>
        </div>
      </div>
 
  );
};

export default Details;
