import { Route, Routes } from 'react-router';
import Header from './Component/Header/Header'
// import Resume from './Component/Resume/Resume'
import { BrowserRouter } from 'react-router-dom';
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register';
import Reset from './Pages/Auth/Reset';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

  <div>
   <ToastContainer/>
    <BrowserRouter>
    
    <Routes>
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/reset' element={<Reset/>} />
    <Route path='/' element={<Header/>} />
    </Routes>

   
    </BrowserRouter>
  </div>
   
  );
}

export default App;
