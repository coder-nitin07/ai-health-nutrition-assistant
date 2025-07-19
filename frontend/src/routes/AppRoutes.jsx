import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Generate from '../pages/Generate';
import Summary from '../pages/Summary';
import NotFound from '../pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/signup' element={<Signup /> } />
        <Route path='/home' element={<Home /> } />
        <Route path='/generate' element={<Generate /> } />
        <Route path='/summary' element={<Summary /> } />
        <Route path='*' element={<NotFound /> } />
    </Routes>
  )
}

export default AppRoutes