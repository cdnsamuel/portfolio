import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Cv from "./components/Cv"
import Projects from "./components/Projects"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="relative bg-gradient-to-r from-primary to-secondary flex flex-col min-h-screen max-w-7xl w-full shadow-xl">
      <Navbar />
      <div className="flex-grow p-4 flex flex-col gap-4">
        <Home />
        <Cv />
        <Projects />
      </div>
      <Footer />
    </div>
  )
}

export default App
