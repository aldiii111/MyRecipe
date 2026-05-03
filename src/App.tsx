import { SidebarProvider } from "@/components/ui/sidebar"
import { SidebarComp } from "@/components/sidebar-comp"
import { useState } from "react"

import './App.css'

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
      <SidebarProvider>
        <SidebarComp
          userInput={search}
          changeInput={(e) => { setSearch(e.target.value) }}
          className="px-2.5 py-5  bg-sidebar"
          SearchHandler={(e) => {
          e.preventDefault();
          console.log("user mengetik: ", search)

          }}
          
        />

      </SidebarProvider>
    </>
  )
}

export default App
