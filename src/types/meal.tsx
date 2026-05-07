
export interface Meal {
  idMeal: string;
  strMeal: string;
  strMealAlternate: string | null;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string | null;
  strYoutube: string | null;
  
  strIngredient1: string;  strMeasure1: string;
  strIngredient2: string;  strMeasure2: string;
  strIngredient3: string;  strMeasure3: string;
  strIngredient4: string;  strMeasure4: string;
  strIngredient5: string;  strMeasure5: string;
  strIngredient6: string;  strMeasure6: string;
  strIngredient7: string;  strMeasure7: string;
  strIngredient8: string;  strMeasure8: string;
  strIngredient9: string;  strMeasure9: string;
  strIngredient10: string; strMeasure10: string;
  strIngredient11: string; strMeasure11: string;
  strIngredient12: string; strMeasure12: string;
  strIngredient13: string; strMeasure13: string;
  strIngredient14: string; strMeasure14: string;
  strIngredient15: string; strMeasure15: string;
  strIngredient16: string; strMeasure16: string;
  strIngredient17: string; strMeasure17: string;
  strIngredient18: string; strMeasure18: string;
  strIngredient19: string; strMeasure19: string;
  strIngredient20: string; strMeasure20: string;
  
  strSource: string | null;
  strImageSource: string | null;
  strCreativeCommonsConfirmed: string | null;
  dateModified: string;
}

// export interface MealsResponse {
//   meals: Meal[] | null;
// }