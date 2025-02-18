import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import Project from './Pages/Project';
import Links from './Pages/Links';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/project" element={<Project /> } />
        <Route path="/links" element={<Links/> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
