import { useState } from 'react'
import './App.css'
import Home from './pages/home/Home'
import TerminalSplash from './components/ui/splash/TerminalSplash'
function App() {
  const [showSplash, setShowSplash] = useState(true)


  return (
    <>
      {showSplash ? (
        <TerminalSplash onComplete={() => setShowSplash(false)} />
      ) : (
        <Home/>
      )}
    </>
  )
}

export default App
