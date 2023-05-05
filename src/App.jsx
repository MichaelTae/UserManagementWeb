import  useUsers  from '././helpers/hooks/use-users'
import Users from './pages/users/Users'
import Revenue from './pages/revenue/revenue'
import Home from './pages/home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './pages/Errorpage'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  
  

 
  //  const { users, isLoading, isError } = useUsers()

  //  console.log(users)
  return (
    <div className="app">
      <Router>
      <Sidebar  />
        <main className='content'>
        
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