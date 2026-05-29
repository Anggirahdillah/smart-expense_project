import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Allocation from './pages/Allocation'
import Report from './pages/Report'

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Login />} />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/allocation"
          element={<Allocation />}
        />

        <Route
          path="/report"
          element={<Report />}
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App