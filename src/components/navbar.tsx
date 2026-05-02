import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


export function Navbar() {
    return (
        <div className="flex h-full flex-row items-center justify-center gap-4 p-6">
            <Button variant="link" asChild>
                <a href="./" className="flex gap-0.5"><img src="./src/assets/letter-w.png" alt="Webflix" className="w-10 h-10" /><p className="text-3xl font-bold">ebflix</p></a>
            </Button>
            <form className="">
                <Input type="search" placeholder="Search" className="bg-input border-ring"/>
            </form>
            <div className=""></div>
        </div>
    )
}