import axios from "axios";

class FoodService {
  constructor() {}

  getRandomFood = async () => {
    let food = {};
    try {
      food = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
    } catch (error) {
      console.log("Failed to retrieve food");
    }
    return food.data.meals[0];
  };
}

export default FoodService;
