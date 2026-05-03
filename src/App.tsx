import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SidebarComp } from "@/components/sidebar-comp"
import Home from "@/page/home"
import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css'

function App() {

  const [search, setSearch] = useState("")

  return (
    <>
    <BrowserRouter>
      <SidebarProvider>
        <SidebarComp
          userInput={search}
          changeInput={(e) => { setSearch(e.target.value) }}
          className="px-2.5 py-5  bg-sidebar"
          SearchHandler={(e) => {
          e.preventDefault();
          }}
        />
        <SidebarInset className="bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
          
        </SidebarInset>

      </SidebarProvider>
    </BrowserRouter>
    </>
  )
}

export default App
