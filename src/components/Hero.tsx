import { Button } from "./ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
    return (
        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/10">
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Hero Background"
                loading="eager"
            />
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent flex flex-col justify-center px-12">
                <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px] mb-4 bg-primary/20 w-fit px-3 py-1 rounded-full backdrop-blur-sm">
                    Trending Now
                </span>
                <h1 className="text-white text-5xl font-black max-w-lg leading-[1.1] mb-4">
                    Master the Art of <br /> <span className="text-primary">Healthy Cooking</span>
                </h1>
                <p className="text-gray-300 max-w-md text-base mb-8 line-clamp-2 font-medium">
                    Discover 10,000+ hand-picked recipes from world-class professional chefs.
                </p>
                <div className="flex gap-4">
                    <a href="#card">
                        <Button className="rounded-full px-8 py-6 text-sm font-bold gap-2 group">
                            Explore Recipes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}