import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Projects from './pages/Projects'

import Overview from './pages/Overview'

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <div className="app-content">

          <Header />

          <Routes>

            <Route
              path="/"
              element={<Overview />}
            />

            <Route
              path="/projects"
              element={<Projects />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App