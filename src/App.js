
import './App.css';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import Slidebar from './component/Slidebar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Fragrances from './pages/Fragrances';
import Men from './pages/Men';
import Women from './pages/Women';
import Products from './pages/Products';
import Login from './pages/Login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Userslist from './pages/Userslist';
import Data from './pages/Data';
import Datapage from './pages/Datapage';
import Singleuser from './pages/Singleuser';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/fragrance' element={<Fragrances/>} />
        <Route path='/men' element={<Men/>} />
        <Route path='/women' element={<Women/>} />
        <Route path='/pro' element={<Products/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/lists' element={<Userslist/>} />
        <Route path='/lists/:id' element={<Singleuser/>} />
        <Route path='/data' element={<Data />} />
        <Route path='/datapage' element={<Datapage/>} />
       
      </Routes>
      <Footer/>
      </BrowserRouter>
     {/* <Navbar /> */}
     {/* <Slidebar/> */}
     {/* <Footer/> */}
   
   
    </div>
  );
}

export default App;
