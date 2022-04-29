import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { darkState } from './atoms/atom'
import Drawer from './components/Drawer'
import Sidebar from './components/Sidebar'
import Home from './screens/Home'

function App() {
  const [darkMode, setDarkMode] = useRecoilState(darkState)
  useEffect(() => {
    const localState = localStorage.getItem('darkMode')
    if (localState) {
      setDarkMode(JSON.parse(localState).darkMode)
    }
  }, [])

  useEffect(() => {
    const html = document.querySelector('html')
    if (darkMode) {
      html?.classList.add('dark')
      localStorage.setItem('darkMode', JSON.stringify({ darkMode: true }))
    } else {
      html?.classList.remove('dark')
      localStorage.setItem('darkMode', JSON.stringify({ darkMode: false }))
    }
  }, [darkMode])

  return (
    <div className="h-screen w-screen flex scrollbar-hide">
      <Drawer />
      <Home />
      <Sidebar />
    </div>
  )
}

export default App
