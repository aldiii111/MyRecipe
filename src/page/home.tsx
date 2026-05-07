import type { Meal } from "@/types/meal";
// import { getIngredient } from "@/types/mealHealper";
import { Card, Hero, CategoryBar } from "@/components/component";

interface homeProp {
  meals: Meal[];
}

export default function Home({ meals }: homeProp) {
  // const ingredient = getIngredient(meals);

  return (
    <main className="min-h-screen w-full overflow-y-scroll">
      <div className="w-[85%] mx-auto py-10">
        <Hero />
        <CategoryBar />
        <h2 className="text-2xl font-black mb-6 text-foreground">Popular Recipes</h2>
      </div>

      <div className="grid grid-cols-4 gap-8 mx-auto w-[85%]">
        {/* <p>data dapet: {meals?.length || 0}</p> */}
        {meals?.map((meal, index) => {
          const id = meal.idMeal
          return (
            <Card
              key={id && meal.idMeal ? index : null}
              img={meal.strMealThumb}
              name={meal.strMeal}
              category={meal.strCategory}
            />
          )
        })}
      </div>
    </main>
  );
}
