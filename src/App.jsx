import './App.css'
import Support from './components/Support'
import ContactPage from './components/ContactPage'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Technology from './components/Technology'
import StoreLocator from './components/StoreLocator'
import Gallery from './components/Gallery'
import { BrowserRouter,Routes,Route } from "react-router"
import Footer from './components/Footer'
import ScrollingTimeTicker from './components/ScrollingTimeTicker'
import VisitorCounter from './components/VisitorCounter'

function App() {
  return (
    <>
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route index element={<Hero/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/technology' element={<Technology /> } />
        <Route path='support' element={<Support />} />
        <Route path='/store-locator' element={<StoreLocator />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/gallery' element={<Gallery />} />


      </Routes>
      <ScrollingTimeTicker/>
      <VisitorCounter/>
      <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App
