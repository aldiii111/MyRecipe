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
import { Search, House, ChefHat, Heart, Settings, Utensils } from "lucide-react"
import { Link } from "react-router-dom"

interface sideCompProps {
    className?: string
    SearchHandler: (e: React.FormEvent) => void
    userInput: string
    changeInput: (e: React.ChangeEvent<HTMLInputElement, Element>) => void
}

export function SidebarComp({ className, SearchHandler, userInput, changeInput }: sideCompProps) {
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
                    <SidebarMenuButton className="mt-9 pl-4 gap-4 flex text-foreground hover:text-primary" size="lg" variant="outline2" asChild>
                        <Link to="/">
                            <House />Home
                        </Link>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-foreground hover:text-primary" size="lg" variant="outline2" asChild>
                        <Link to="/categories">
                            <Utensils />Categories
                        </Link>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-foreground hover:text-primary" size="lg" variant="outline2" asChild>
                        <Link to="/favorites">
                            <Heart />Favorites
                        </Link>
                    </SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-foreground hover:text-primary" size="lg" variant="outline2" asChild>
                        <Link to="/settings">
                            <Settings />Settings
                        </Link>
                    </SidebarMenuButton>
                    <Separator className="my-9" />
                    <h1 className="text-primary text-base font-bold tracking-wider uppercase">Popular Categories</h1>
                </SidebarGroup>
                <SidebarGroup>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Chicken Dishes</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Beef & Meat</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Seafood</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Dessert & Cakes</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Breakfast Menu</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex text-muted-foreground hover:text-foreground" size="lg" variant="outline2">Vegetarian</SidebarMenuButton>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}



// export function Detail() {
//     return (
        
//     )
// }
