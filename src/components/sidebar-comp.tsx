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
import { Search } from "lucide-react"
import { House } from "lucide-react"
import { Film } from "lucide-react"
import { Settings } from "lucide-react"

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
                <div className="flex flex-row gap-0.5"><img src="../src/assets/letter-w (1).png" className="w-10 h-10" /><h2 className="text-2xl mt-1 font-bold">ebFlix</h2></div>
                <SidebarGroupLabel className="px-0 text-md">Watch Your Favorite Anime</SidebarGroupLabel>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup className="mt-3">
                    <form className="relative group" onSubmit={SearchHandler}>
                        <SidebarInput className="h-11 pl-10" value={userInput} placeholder="  Search Anime..." onChange={changeInput} />
                        <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none" type="submit">
                            <Search className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </form>
                    <SidebarMenuButton className="mt-9 pl-4 gap-4 flex" size="lg" variant="outline2"><House />Home</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2"><Film />Anime</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2"><House />Profile</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2"><Settings />Settings</SidebarMenuButton>
                    <Separator className="my-9" />
                    <h1 className="text-sidebar-foreground/50">GENRES</h1>
                </SidebarGroup>
                <SidebarGroup className="overflow-y-hidden">
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">All</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Action</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Adventure</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Comedy</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Fantasy</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Historical</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Horror</SidebarMenuButton>
                    <SidebarMenuButton className="mt-3 pl-4 gap-4 flex" size="lg" variant="outline2">Romance</SidebarMenuButton>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
