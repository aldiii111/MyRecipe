import { Star, Clock, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MovieHero() {
  return (
    <div className="relative w-full h-[500px] rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <img 
        src="/src/assets/j.jpeg" 
        alt="Shadow Protocol" 
        className="absolute inset-0 w-full h-4/3 object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-12 space-y-6 max-w-2xl">
        {/* Rating and Genre */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md">
            <Star className="w-4 h-4 fill-red-500 text-red-500" />
            <span>8.5</span>
          </div>
          <span className="text-white/60">•</span>
          <span className="text-white/90">Comedy</span>
        </div>

        {/* Title */}
        <h1 className="text-6xl font-extrabold tracking-tight text-white drop-shadow-2xl">
          Naruto Shippuden
        </h1>

        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>128 min</span>
          </div>
          <div className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            <span>Now Playing</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-white/70 leading-relaxed max-w-lg">
          A high-octane thriller following a secret agent on a mission to uncover a global conspiracy that threatens world peace.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 pt-4">
          <Button className="bg-primary/90 hover:bg-primary text-white border-none h-12 px-8 text-base font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
            Book Now
          </Button>
        </div>
      </div>
    </div>
  )
}
