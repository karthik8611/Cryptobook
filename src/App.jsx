
import './App.css'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './components/Navbar'
// import Corousel from './components/Corousel'
// import Footer from './components/Footer'
import Home from './components/Home'
import Transaction from './components/Transaction';
import Data from './components/Data';
import Contact from './components/Contact';



function App() {
  

  return (
<>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/transaction" element={<Transaction />} />
  <Route path="/data" element={<Data />} />
  <Route path="/contact" element={<Contact />} />

</Routes>
  
  


</>
 
  
    
   
  
  )
}

export default App
