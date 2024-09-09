import './App.css'
import { Routes, Route } from 'react-router-dom'
import Main from './components/main'

function App() {

  return (
    <div className="container w-full">
      <Routes>
        <Route path='/' element={<Main />}/>
      </Routes>
    </div>
  )
}

export default App
