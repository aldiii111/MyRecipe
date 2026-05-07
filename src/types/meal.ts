export interface Meal {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
    strInstructions: string;
    strCategory: string;
    strArea: string;
}

export interface MealResponse {
    meals: Meal[] | null
}