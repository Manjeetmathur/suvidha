import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home/Home'
import Services from './Components/Services/Services'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Blog from './Components/Blog/Blog'

function App() {

  return (
    <>
     
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/services' element = {<Services/>} />
            <Route path='/blog' element = {<Blog/>} />
            <Route path='/about' element = {<About/>} />
            <Route path='/Contact' element = {<Contact/>} />
          </Routes>
          <Footer/>
        </BrowserRouter>
     
    </>
  )
}

export default App
