import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Home from '../pages/Home';
import Generate from '../pages/Generate';
import Summary from '../pages/Summary';
import NotFound from '../pages/NotFound';
import Protectedoutes from '../components/ProtectedRoute';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Logs from '../pages/Logs';
import LogDetails from '../pages/LogDetails';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path='/login' element={<Login /> } />
        <Route path='/signup' element={<Signup /> } />

        {/* Protected Routes */}
        <Route path='/home' element={
            <Protectedoutes> 
                  <Home /> 
            </Protectedoutes>
        } />

        <Route path='/generate' element={
            <Protectedoutes>
                  <Generate /> 
            </Protectedoutes>
        } />

        <Route path='/summary' element={
            <Protectedoutes>
                <Navbar />
                  <Summary />
                <Footer /> 
            </Protectedoutes>
          } />

          <Route path="/logs" element={
            <Protectedoutes>
              <Navbar />
                <Logs />
              <Footer />
            </Protectedoutes>
          } />

          <Route path="/logs/:id" element={
              <Protectedoutes>
                <Navbar />
                  <LogDetails />
                <Footer />
              </Protectedoutes>
            } />
          
        <Route path='*' element={<NotFound /> } />
    </Routes>
  )
}

export default AppRoutes