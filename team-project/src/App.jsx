import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Pricing } from './pages/Pricing'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/pricing',
          element: <Pricing />
        }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App