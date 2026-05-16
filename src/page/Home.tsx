import type { Meal } from "@/types/meal";
// import { getIngredient } from "@/types/mealHealper";
import { Card } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { CategoryBar } from "@/components/CategoryBar";
import { Spinner } from "@/components/ui/spinner";
import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

interface homeProp {
    meals?: Meal[] | null;
}

// const [favorites, setFavorites] = useState<Meal[]>([])
const favorites: Meal[] = [];

export function Home({ meals }: homeProp) {
    // const ingredient = getIngredient(meals);

    return (
        <main className="min-h-screen pb-10 w-full">
            <div className="w-[85%] mx-auto py-10">
                <Hero />
                <CategoryBar />
                <h2 className="text-2xl font-black mb-6 text-foreground">Popular Recipes</h2>
            </div>

            <div className="grid grid-cols-4 gap-8 mx-auto w-[85%]">
                {!meals && <div className="col-span-full mx-auto flex flex-col items-center gap-3">
                    <Spinner />
                    <p className="text-muted-foreground text-sm font-semibold">Loading</p></div>}
                {meals && meals?.map((meal, index) => {
                    const id = meal.idMeal
                    const path = `/detail/${id}`
                    return (
                        <Link to={path}>
                            <Card
                                key={id && meal.idMeal ? index : null}
                                img={meal.strMealThumb}
                                name={meal.strMeal}
                                category={meal.strCategory}
                            />
                        </Link>

                    )
                })}
            </div>
        </main>
    );
}