import './App.css'
import  useUsers  from '././helpers/hooks/use-users'
import Users from './pages/users/Users'
import Revenue from './pages/revenue/revenue'
import Home from './pages/home/home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/Errorpage'
import Sidebar from './components/sidebar/Sidebar'
import { useState } from 'react';
function App() {
  
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  //  const { users, isLoading, isError } = useUsers()

  //  console.log(users)
  return (
    <div className="App">
      <Router>
      <Sidebar isOpen={isOpen} />
        <main className='content'>
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/users' element={<Users />} />
            <Route path='/revenue' element={<Revenue />} />
            <Route path='*' element={<ErrorPage/>} />
          </Routes>
        </main>
      </Router>
      </div>
  )
}

export default App