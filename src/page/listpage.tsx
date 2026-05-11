import type { Meal } from "@/types/meal";
// import { getIngredient } from "@/types/mealHealper";
import { Card, Hero, CategoryBar } from "@/components/component";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { HeartOff, ArrowRight, Trash2, AlertCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

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
        {}
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

export function Favorite() {
  const favorites: Meal[] = [];

  return (
    <main className="min-h-screen pb-10 w-full overflow-y-scroll">
      <div className="w-[85%] mx-auto pt-16 pb-10 flex justify-between items-end border-b border-border">
        <div>
          <h1 className="text-4xl font-black text-foreground tracking-tight">My Collection</h1>
          <p className="text-muted-foreground mt-2 font-medium">Your hand-picked favorite recipes for next meals</p>
        </div>
        {favorites.length > 0 && (
          <Button variant="destructive" className="rounded-full gap-2 font-bold px-6 shadow-lg shadow-red-500/10">
            <Trash2 className="w-4 h-4" /> Clear All
          </Button>
        )}
      </div>

      <div className="w-[85%] mx-auto py-12">
        {favorites.length === 0 ? (
          /* --- Empty State UI --- */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-24 h-24 bg-primary/5 rounded-full flex items-center justify-center mb-6">
              <HeartOff className="w-12 h-12 text-primary/40" />
            </div>
            <h2 className="text-2xl font-bold text-foreground">Your favorite is empty...</h2>
            <p className="text-muted-foreground max-w-sm mt-3 font-medium">
              You haven't saved any recipes yet. Start exploring and find your next favorite dish!
            </p>
            <Link to="/">
              <Button className="mt-8 rounded-full px-8 py-6 font-bold gap-3 shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
                Start Exploring <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        ) : (
          /* --- Grid UI (Logic loopnya taro di sini) --- */
          <div className="grid grid-cols-4 gap-8">
            {/* Lu tinggal .map() datas fav lu di sini nanti */}
          </div>
        )}
      </div>
    </main>
  )
}

export function Settings() {

  return (
    <main className="min-h-screen pb-10 w-full overflow-y-scroll">
      <div className="w-[85%] mx-auto py-10">

      </div>

      <div className=""></div>
    </main>
  )
}

export function Notfound() {

  return (
    <main className="min-h-screen pb-10 w-full overflow-y-scroll">
      <div className="w-[85%] mx-auto py-10">

      </div>

    </main>
  )
}

interface ErrorProp {
  message: string | null;
  retry: () => void;
}

export function ErrorView({ message, retry }: ErrorProp) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-black text-foreground tracking-tight">Oops! Something went wrong</h2>
      <p className="text-muted-foreground mt-2 max-w-sm mx-auto font-medium leading-relaxed">
        {message || "We couldn't fetch the recipes. Please check your internet connection and try again."}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button 
          onClick={retry} 
          className="rounded-full px-10 py-6 font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </Button>
        <Link to="/">
          <Button 
            variant="outline" 
            className="rounded-full px-10 py-6 font-bold border-2 hover:bg-muted transition-colors"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
