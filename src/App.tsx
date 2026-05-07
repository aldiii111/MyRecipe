import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SidebarComp } from "@/components/component"
import Home from "@/page/home"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import type { Meal } from "./types/meal"
import { getIngredient } from "./types/mealHealper"

import './App.css'

function App() {

  const [search, setSearch] = useState("")
  const [datas, setdatas] = useState<Meal[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      const result = await response.json()
      setdatas(result.meals)
    }
    console.log(datas?.length || 0)
    fetchData()
  }, [search])

  return (
    <>
      <BrowserRouter>
        <SidebarProvider>
          <SidebarComp
            userInput={search}
            changeInput={(e) => setSearch(e.target.value)}
            className="px-2.5 py-5  bg-sidebar"
            SearchHandler={(e) => {
              e.preventDefault();
            }}
          />
          <SidebarInset className="bg-background">
            <Routes>
              <Route path="/" element={<Home meals={datas} />} />

            </Routes>
            {/*
            <Routes>
              <Route path="/favorite" element={<Favorite />} />

            </Routes>
            <Routes>
              <Route path="/settings" element={<Settings />} />

            </Routes> */}
          </SidebarInset>

        </SidebarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
