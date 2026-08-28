import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import App from './App'
import Home from './pages/Home'
import About from './pages/About'
import Partners from './pages/Partners'
import Plan from './pages/Plan'
import Team from './pages/Team'
import Documentaries from './pages/Documentaries'
import NotFound from './pages/NotFound'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: { default: '#0a0a0a', paper: '#141414' },
    primary: { main: '#f5b942' },
  },
  typography: { fontFamily: 'inherit' },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'partners', element: <Partners /> },
      { path: 'plan', element: <Plan /> },
      { path: 'documentaries', element: <Documentaries /> },
      { path: 'team', element: <Team /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
