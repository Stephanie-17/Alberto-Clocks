import './App.css'
import About from './components/About'
import ContactPage from './components/ContactPage'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'

function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <Products />
    <About />
   <ContactPage />
    {/* <img src="/hero.png" alt="" />
     <h1>Alberto Clocks</h1>
     <p>Luxury in  the making</p>
     <button>Buy</button> */}
    </>
  )
}

export default App
