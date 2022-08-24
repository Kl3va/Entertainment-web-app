//import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import { app } from './Firebase/firebaseConfig'

import PrivateRoutes from 'Components/PrivateRoutes'
import Login from 'Pages/Login/Login'
import SignUp from 'Pages/SignUp/SignUp'
import Layout from 'Pages/Home/Layout'
import Movies from 'Pages/Movies/Movies'
import Tv from 'Pages/Tv/Tv'
import Bookmark from 'Pages/Bookmark/Bookmark'
import Home from 'Pages/Home/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='movies' element={<Movies />} />
            <Route path='tv' element={<Tv />} />
            <Route path='bookmarks' element={<Bookmark />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
