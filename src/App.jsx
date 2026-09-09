import './App.css'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Overview from './pages/Overview'
import Projects from './pages/Projects'
import Tasks from './pages/Tasks'
import Calendar from './pages/Calendar'

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

            <Route
              path="/tasks"
              element={<Tasks />}
            />
            <Route
              path="/calendar"
              element={<Calendar />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App