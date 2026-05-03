import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarInput,
    SidebarMenuButton,
} from "@/components/ui/sidebar"

import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

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
                        <SidebarInput className="h-11 pl-10" value={userInput} placeholder="  Search Anime..." onChange={changeInput}/>
                        <Button size="icon" variant="ghost" className="absolute left-2 top-1/2 -translate-y-1/2 bg-transparent hover:bg-transparent border-none" type="submit">
                            <Search className="w-5 h-5 text-muted-foreground" />
                        </Button>
                    </form>
                    <SidebarMenuButton className="mt-6" size="lg" variant="outline">Home</SidebarMenuButton>
                </SidebarGroup>
                <SidebarGroup>

                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
