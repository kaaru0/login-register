import './App.css';
import Login from './Components/Login'
import Register from './Components/Register'
import Welcome from './Components/Welcome'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/welcome/:userName" element={<Welcome />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App;
