
import './App.css'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  

  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
