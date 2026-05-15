import type { Meal } from "@/types/meal";
import { HeartOff, ArrowRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          <div className="grid grid-cols-4 gap-8">
            {}
          </div>
        )}
      </div>
    </main>
  )
}