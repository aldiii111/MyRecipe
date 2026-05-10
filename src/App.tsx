import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { SidebarComp } from "@/components/component"
import { Home, Favorite } from "@/page/main"
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import type { Meal } from "./types/meal"
import { Spinner } from "./components/ui/spinner"
// import { getIngredient } from "./types/mealHealper"

import './App.css'

function App() {

  const [search, setSearch] = useState("")
  const [datas, setdatas] = useState<Meal[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const result = await response.json()
        setdatas(result.meals)
      } catch (error) {
        setError('Failed to fetch data')
      } finally {
        setIsLoading(false)
      }
    }
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
            {isLoading && (
              <Home loading={<Spinner />} meals={null} />
            )}
            {error && <p>{error}</p>}
            {!isLoading && !error && !datas && (
              <h1>gada {search}</h1>
            )}
            {!isLoading && !error && (
              <Routes>
                <Route path="/" element={<Home meals={datas} loading={null} />} />
                <Route path="/favorites" element={<Favorite />} />
                {/* <Route path="/settings" element={<Settings />} /> */}
              </Routes>
            // <Routes>
            //   <Route path="/settings" element={<Settings />} />

            // </Routes>
            )}


          </SidebarInset>

        </SidebarProvider>
      </BrowserRouter>
    </>
  )
}

export default App
