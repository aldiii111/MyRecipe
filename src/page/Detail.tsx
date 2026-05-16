import { ArrowLeft, Heart, Play, ChefHat, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <main className="min-h-screen bg-background pb-20">
      {/* --- Header / Navigation --- */}
      <div className="max-w-3xl mx-auto px-6 py-8 flex justify-between items-center">
        <Link to="/">
          <Button variant="ghost" className="rounded-full gap-2 hover:bg-primary/5 text-muted-foreground hover:text-primary transition-all">
            <ArrowLeft className="w-5 h-5" /> Back to Recipes
          </Button>
        </Link>
        <Button variant="outline" className="rounded-full w-12 h-12 p-0 border-2 hover:bg-red-50 hover:border-red-200 group">
          <Heart className="w-6 h-6 text-muted-foreground group-hover:text-red-500 transition-colors" />
        </Button>
      </div>

      <div className="max-w-3xl mx-auto px-6">

        {/* --- Category Badge --- */}
        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs bg-primary/5 w-fit px-3 py-1.5 rounded-full inline-block mb-4">
          Chicken Dish
        </span>

        {/* --- Title --- */}
        <h1 className="text-4xl md:text-5xl font-black text-foreground leading-[1.1] mb-8">
          Teriyaki Chicken Casserole
        </h1>

        {/* --- Hero Image --- */}
        <div className="relative group mb-10">
          <div className="absolute -inset-4 bg-primary/5 rounded-[40px] blur-2xl group-hover:bg-primary/10 transition-all duration-500"></div>
          <img
            src="https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
            alt="Recipe Name"
            className="relative w-full aspect-[16/10] object-cover rounded-[28px] shadow-2xl border-4 border-white"
          />
        </div>

        {/* --- Stats Row --- */}
        <div className="flex items-center gap-8 bg-muted/40 rounded-2xl p-5 mb-10 border border-border/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Origin</p>
              <p className="font-bold text-sm">Japanese</p>
            </div>
          </div>
        </div>

        {/* --- Description --- */}
        <p className="text-muted-foreground leading-relaxed font-medium mb-14">
          A delicious and easy-to-make chicken casserole with a sweet and savory teriyaki glaze. Perfect for family dinners or meal prep.
        </p>

        {/* --- Ingredients --- */}
        <div className="mb-14">
          <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
            Ingredients <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-md">8 Items</span>
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[1, 2, 3, 4, 5].map((i) => (
              <li key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/20 transition-all group">
                <CheckCircle2 className="w-5 h-5 text-primary/40 group-hover:text-primary transition-colors mt-0.5 flex-none" />
                <div>
                  <p className="font-bold text-foreground text-sm">Soy Sauce</p>
                  <p className="text-xs text-muted-foreground font-medium">3/4 Cup</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Cooking Instructions --- */}
        <div className="mb-14">
          <h3 className="text-2xl font-black mb-8">Cooking Instructions</h3>
          <div className="space-y-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex gap-5">
                <div className="flex-none w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-black shadow-lg shadow-primary/20">
                  {step}
                </div>
                <p className="text-muted-foreground leading-relaxed font-medium pt-1">
                  Preheat oven to 350 degrees F (175 degrees C). In a small saucepan, combine the cornstarch, cold water, sugar, soy sauce, vinegar, garlic, ginger and ground black pepper. Let simmer, stirring frequently, until sauce thickens and bubbles.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- Tutorial Video --- */}
        <div className="mb-10">
          <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
            Tutorial Video <Play className="w-5 h-5 text-primary" />
          </h3>
          <div className="relative aspect-video rounded-[28px] overflow-hidden shadow-2xl group border-4 border-white">
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-500">
                <Play className="w-8 h-8 text-white fill-white" />
              </div>
            </div>
            <img
              src="https://img.youtube.com/vi/4aZr5hZXP_s/maxresdefault.jpg"
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </main>
  );
}
