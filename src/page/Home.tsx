import type { Meal } from "@/types/meal";
// import { getIngredient } from "@/types/mealHealper";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { CategoryBar } from "@/components/CategoryBar";
import { Spinner } from "@/components/ui/spinner";

interface homeProp {
  meals?: Meal[] | null;
}

export function Home({ meals}: homeProp) {
  // const ingredient = getIngredient(meals);

  return (
    <main className="min-h-screen pb-10 w-full overflow-y-scroll">
      <div className="w-[85%] mx-auto py-10">
        <Hero />
        <CategoryBar />
        <h2 className="text-2xl font-black mb-6 text-foreground">Popular Recipes</h2>
      </div>

      <div className="grid grid-cols-4 gap-8 mx-auto w-[85%]">
        {!meals && <div className="col-span-full mx-auto flex flex-col items-center gap-3">
        <Spinner/>
        <p className="text-muted-foreground text-sm font-semibold">Loading</p></div>}
        {meals && meals?.map((meal, index) => {
          const onkliks = () => {
            alert(index+1)
          }
          const id = meal.idMeal
          return (
            <Card
              key={id && meal.idMeal ? index : null}
              onklik={onkliks}
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