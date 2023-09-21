
import './App.css';
import NavBar from './components/Header/NavBar';
import MainComp from './components/Home/MainComp';
import NewNavBar from './components/NewNavBar/NewNavBar';
import Footer from './components/Footer/Footer'
import SignIn from './components/Signup_Signin/SignIn';
import SignUp from './components/Signup_Signin/SignUp';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import BuyNow from './components/BuyNow/BuyNow';

function App() {
  return (
    <>
    <NavBar/>
    <NewNavBar/>
     <Routes>
      <Route path="/" element={<MainComp/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/register" element={<SignUp/>}/>
      <Route path="/getproductsone/:id" element={<Cart/>}/>
      <Route path="/buynow" element={<BuyNow/>}/>
     </Routes>
    <Footer/>
    </>
  );
}

export default App;
