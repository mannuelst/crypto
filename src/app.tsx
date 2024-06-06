import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/nav-bar/nav-bar"
import { Coin } from "./pages/coin/coin"
import { Home } from "./pages/home/home"
function App() {

  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </div>
  )
}

export default App
