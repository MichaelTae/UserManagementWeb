import Users from './pages/users/Users'
import Revenue from './pages/revenue/Revenue'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/Errorpage'
import Sidebar from './components/sidebar/Sidebar'
import {useEffect, useState } from 'react';
import PrivateRoutes from './helpers/auth/privateRoutes';
import Login from './pages/login/login';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  

 
  return (
    <div className="app">
      <Router>
       <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />
        <main className={`content ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <div className="background">
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   <span />
   
</div>
          <Routes>
            <Route element={<PrivateRoutes/>} >
            <Route path='/' element={<Home isOpen={sidebarOpen} />} />
            <Route path='/users' element={<Users isOpen={sidebarOpen} />} />
            <Route path='/revenue' element={<Revenue isOpen={sidebarOpen}/>} />
            <Route path='*' element={<ErrorPage/>} />
            </Route>
            <Route element={<Login/>} path='/login' />
          </Routes>
        </main>
      </Router>
      </div>
  )
}

export default App