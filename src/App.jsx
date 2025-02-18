import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import Project from './Pages/Project';
import Links from './Pages/Links';
import Certificates from './Pages/Certificates';
import Blog from './Pages/Blog';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/project" element={<Project /> } />
        <Route path="/links" element={<Links/> } />
        <Route path="/blog" element={<Blog/> } />
        <Route path="/certificate" element={<Certificates/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
