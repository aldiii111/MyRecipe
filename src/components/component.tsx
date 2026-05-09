import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarInput,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Search, House, ChefHat, Heart, Settings, Utensils, ArrowRight, EggFried, Fish, Beef, Dessert, Vegan } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface sideCompProps {
    className?: string
    SearchHandler: (e: React.FormEvent) => void
    userInput: string
    changeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function SidebarComp({ className, SearchHandler, userInput, changeInput }: sideCompProps) {
    const location = useLocation();

    const menuItems = [
        { name: "Home", to: "/", icon: <House /> },
        { name: "Favorites", to: "/favorites", icon: <Heart /> },
        { name: "Settings", to: "/settings", icon: <Settings /> },
    ];

    const categories = [
        { name: "Breakfast", to: "/categories/breakfast", icon: <EggFried /> },
        { name: "Seafood", to: "/categories/seafood", icon: <Fish /> },
        { name: "Meat", to: "/categories/meat", icon: <Beef /> },
        { name: "Dessert", to: "/categories/dessert", icon: <Dessert /> },
        { name: "Vegan", to: "/categories/vegan", icon: <Vegan /> },
        { name: "Pasta", to: "/categories/pasta", icon: <Utensils /> },
    ]

    return (
        <Sidebar className={className}>
            <SidebarHeader className="gap-1 flex flex-col">
                <div className="flex flex-row gap-0.5"><ChefHat className="w-8 h-8 text-primary mt-1" /><h2 className="text-2xl mt-1 font-bold text-foreground">MyRecipe</h2></div>
                <SidebarGroupLabel className="px-0 text-md text-muted-foreground">Find Inspiring Recipes</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="mt-3">
                    <form className="relative group" onSubmit={SearchHandler}>
                        <SidebarInput className="h-11 pl-10 bg-background text-foreground border-border" value={userInput} placeholder="  Search recipes (e.g., Chicken)..." onChange={changeInput} />
                        <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none" type="submit">
                            <Search className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </form>

                    <div className="mt-9 space-y-1">
                        {menuItems.map((item) => {
                            const isActive = location.pathname === item.to;
                            return (
                                <SidebarMenuButton
                                    key={item.name}
                                    className={`relative pl-4 gap-4 flex transition-all duration-200 group ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                                    size="lg"
                                    variant="outline2"
                                    asChild
                                >
                                    <Link to={item.to}>
                                        {isActive && <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
                                        <div className={`${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                                            {item.icon}
                                        </div>
                                        {item.name}
                                    </Link>
                                </SidebarMenuButton>
                            )
                        })}
                    </div>

                    <Separator className="my-9" />
                    <h1 className="text-primary text-base font-bold tracking-wider uppercase">Popular Categories</h1>
                </SidebarGroup>
                <SidebarGroup className="space-y-1">
                    {categories.map((cat) => {
                        const isActive = location.pathname === cat.to;
                        return (
                            <SidebarMenuButton
                                key={cat.name}
                                className={`relative pl-4 gap-4 flex transition-all duration-200 group ${isActive ? 'bg-primary/10 text-primary font-bold' : 'text-muted-foreground hover:text-primary hover:bg-primary/5'}`}
                                size="lg"
                                variant="outline2"
                                asChild
                            >
                                <Link to={cat.to}>
                                    {isActive && <div className="absolute left-0 w-1 h-6 bg-primary rounded-r-full" />}
                                    <div className={`${isActive ? 'text-primary' : 'text-muted-foreground group-hover:text-primary'}`}>
                                        {cat.icon}
                                    </div>
                                    {cat.name}
                                </Link>
                            </SidebarMenuButton>
                        )
                    })}
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}



interface CardProps {
    img: string;
    name: string;
    category: string;
    key: number | null;
    onklik: () => void;
}

export function Card({ img, name, category, key, onklik }: CardProps) {
    return (
        <div key={key} onClick={onklik} id="card" className="relative bg-card rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group cursor-pointer border border-transparent hover:border-primary/10">
            <div className="relative">
                <img
                    src={img}
                    alt={name}
                    className="w-full aspect-4/5 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button className="absolute top-3 right-3 bg-white/40 backdrop-blur-md p-2.5 rounded-full doubleClick:bg-white transition-all duration-300 shadow-sm border border-white/20">
                    <Heart className="w-5 h-5 text-white group-hover:text-red-500 fill-transparent active:fill-red-500 transition-all" />
                </button>
            </div>

            <div className="p-5 pt-15 absolute bottom-0 bg-linear-to-t from-black via-black/75 to-transparent w-full">
                <span className="text-[10px] font-black uppercase tracking-[0.15em] text-primary bg-primary/20 px-2 py-1 rounded-md">
                    {category}
                </span>
                <h3 className="mt-3 font-bold text-lg text-background leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                    {name}
                </h3>
            </div>
        </div>
    )
}

export function Hero() {
    return (
        <div className="relative w-full h-[350px] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/10">
            <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
                className="absolute inset-0 w-full h-full object-cover"
                alt="Hero Background"
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
                    <button
                        key={index}
                        className={`flex items-center gap-3 px-6 py-2.5 active:bg-primary active:text-white active:border-primary active:shadow-md active:shadow-primary/30 hover:scale-105 active:scale-95 rounded-full border whitespace-nowrap transition-all duration-150 h-14 font-bold text-sm ${isActive ? 'bg-primary text-white border-primary shadow-md shadow-primary/30' : 'bg-card text-muted-foreground border-border hover:border-primary hover:text-primary'}`}
                    >
                        <Link to={cat.to} className="flex items-center gap-3">
                            <span className="text-base">{cat.icon}</span>
                            {cat.name}
                        </Link>
                    </button>
                )
            })}
        </div>
    )
}
