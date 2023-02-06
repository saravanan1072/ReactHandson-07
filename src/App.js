import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Student from "./components/Student"
import Contact from "./components/Contact"
import "./App.css"
import Navbar from "./components/Navbar"
import NotFound from "./components/NotFound"
import AddorUpdate from "./components/AddorUpdate"
import { StudentsData } from "./components/StudentsData"

function App() {
  return (
    <div className="App">
      <Navbar className="navbar" />
      <StudentsData>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />
          <Route path="/students-desc" element={<AddorUpdate />} />
          <Route path="/students-desc/:id" element={<AddorUpdate />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </StudentsData>
    </div>
  )
}

export default App