import ContactHeader from "./components/Contact/ContactHeader"
import Contactform from "./components/Contactform/Contactform"
import Nav from "./components/Navigation/Nav"
import "./App.css"

export default function App()
{
  return(
    <div>
      <Nav/>
      <main className="main_container">
      <ContactHeader/>
      <Contactform/>
      </main>
      
    </div>
  )
}