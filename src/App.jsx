import { Navbar } from './components/navbar'
import { Hero } from './components/hero'
import { Services } from './components/services'
import { About } from './components/about'
import { Tours } from './components/tours'
import { Footer } from './components/footer'



export const App = () => {
  return (
    <>
   <Navbar/>
   <Hero />
   <About/>
   <Services/>
   <Tours/>
   <Footer/>
    </>
  )
}
