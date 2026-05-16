import { Heart } from "lucide-react";

interface CardProps {
    img: string;
    name: string;
    category: string;
    key: number | null;
}

export function Card({ img, name, category, key }: CardProps) {
    return (
        <div key={key} id="card" className="relative bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer border border-transparent hover:border-primary/10">
            <div className="relative">
                <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="w-full aspect-4/5 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 bg-white/40 backdrop-blur-md p-2.5 rounded-full doubleClick:bg-white transition-all duration-300 shadow-sm border border-white/20">
                    <Heart className="w-5 h-5 text-white group-hover:text-red-500 fill-transparent transition-all" />
                </button>
            </div>

            <div className="p-5 pt-15 absolute bottom-0 bg-linear-to-t from-black via-black/75 to-transparent w-full">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary bg-primary/20 px-2 py-1 rounded-md">
                    {category}
                </span>
                <h3 className="mt-3 font-bold text-lg text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>
            </div>
        </div>
    )
}