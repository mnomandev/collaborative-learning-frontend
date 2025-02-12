import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
