import Users from './pages/users/Users'
import Revenue from './pages/revenue/revenue'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/Errorpage'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  

 
 
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
            <Route path='/' element={<Home isOpen={sidebarOpen} />} />
            <Route path='/users' element={<Users isOpen={sidebarOpen} />} />
            <Route path='/revenue' element={<Revenue />} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </main>
      </Router>
      </div>
  )
}

export default App