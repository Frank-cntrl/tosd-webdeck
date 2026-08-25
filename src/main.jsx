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
import NotFound from './pages/NotFound'
import FineArt from './pages/FineArt'
import Comedy from './pages/Comedy'
import Music from './pages/Music'
import Cannabis from './pages/Cannabis'
import Events from './pages/Events'
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
      { path: 'team', element: <Team /> },
      { path: 'fine-art', element: <FineArt /> },
      { path: 'comedy', element: <Comedy /> },
      { path: 'music', element: <Music /> },
      { path: 'cannabis', element: <Cannabis /> },
      { path: 'events', element: <Events /> },
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
