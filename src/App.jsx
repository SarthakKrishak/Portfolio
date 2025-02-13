import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './Pages/Home';
import Project from './Pages/Project';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/project" element={<Project /> } />
    </Routes>
    </BrowserRouter>
  )
}

export default App
