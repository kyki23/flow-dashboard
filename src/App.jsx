import { useState } from 'react'
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
import Activity from './pages/Activity'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  function toggleSidebar() {
    setIsSidebarOpen((current) => !current)
  }

  function closeSidebar() {
    setIsSidebarOpen(false)
  }

  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
        />

        <div className="app-content">

          <Header
            onMenuToggle={toggleSidebar}
          />

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

            <Route
              path="/activity"
              element={<Activity />}
            />

            <Route
              path="/settings"
              element={<Settings />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  )
}

export default App