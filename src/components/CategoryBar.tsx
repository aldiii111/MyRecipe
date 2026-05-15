import { useLocation, Link } from "react-router-dom";
import { EggFried, Fish, Beef, Dessert, Vegan, Utensils } from "lucide-react";
import { Button } from "./ui/button";

export function CategoryBar() {
    const location = useLocation();

    const categories = [
        { name: "Breakfast", to: "/categories/breakfast", icon: <EggFried /> },
        { name: "Seafood", to: "/categories/seafood", icon: <Fish /> },
        { name: "Meat", to: "/categories/meat", icon: <Beef /> },
        { name: "Dessert", to: "/categories/dessert", icon: <Dessert /> },
        { name: "Vegan", to: "/categories/vegan", icon: <Vegan /> },
        { name: "Pasta", to: "/categories/pasta", icon: <Utensils /> },
    ]

    return (
        <div className="flex items-center gap-3 overflow-x-auto p-2 no-scrollbar mb-10">
            {categories.map((cat, index) => {
                const isActive = location.pathname === cat.to;
                return (
                    <Link to={cat.to}>
                        <Button
                            key={index}
                            className={`flex items-center gap-3 px-6 py-2.5 active:bg-primary active:text-white active:border-primary active:shadow-md active:shadow-primary/30 hover:scale-105 transition-transform rounded-full border whitespace-nowrap duration-150 h-14 font-bold text-sm ${isActive ? 'bg-primary text-white border-primary shadow-md shadow-primary/30' : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'}`}>
                            <span className="text-base">{cat.icon}</span>
                            {cat.name}
                        </Button>
                    </Link>
                )
            })}
        </div>
    )
}