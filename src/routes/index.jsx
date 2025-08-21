import { Routes, Route } from 'react-router-dom'
import HomePage from '../features/home-page/pages/HomePage'
import MainLayout from '../layouts/MainLayout' 

export default function AppRoutes() {
  return (
    <Routes>
        <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<h1>404</h1>} />
        </Route>
    </Routes>
  )
}

