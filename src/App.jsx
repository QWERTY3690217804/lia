import { useState } from 'react'

import './App.css'
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Layout from './components/Layout';
import Chat from './components/Chat';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen/>} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Chat/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
