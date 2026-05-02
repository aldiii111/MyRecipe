import { ResizableVertical } from './components/layout'
import { Navbar } from './components/navbar'
import { Main } from './components/main'
import './App.css'

function App() {
  return (
    <>
      <ResizableVertical
        navContent={<Navbar/>}
        mainContent={<Main />}
      >

      </ResizableVertical>
    </>
  )
}

export default App
