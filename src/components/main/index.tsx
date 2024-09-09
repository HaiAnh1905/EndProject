import NavBar from '../navbar'
import { Routes, Route } from 'react-router-dom'
import './style.scss'
import Home from './home'

const Main = () => {
    return (
        <div className="home-main">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />}/>
            </Routes>
        </div>
    )
}

export default Main