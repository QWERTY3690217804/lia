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

// games
import WHGame from './components/games/WHGame';
import PronounsGame from './components/games/PronounsGame';
import ReciprocalGame from './components/games/ReciprocalGame';
import SafetyGame from './components/games/SafetyGame';
import ZonesGame from './components/games/ZonesGame';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen/>} />
          </Route>

          <Route path="/dashboard" element={<Dashboard />}>            <Route path="wh" element={<WHGame />} />
            <Route path="pronouns" element={<PronounsGame />} />
            <Route path="reciprocal" element={<ReciprocalGame />} />
            <Route path="safety" element={<SafetyGame />} />
            <Route path="zones" element={<ZonesGame />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
