import './App.css';
import Home from './componets/Pages/Home'
import Products from './componets/Pages/Product'
import Contact from './componets/Pages/Contact'
import Layout from './componets/Pages/Layout'
import Footer from './componets/UI/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="products" element={<Products/>}/>
            <Route path="contacts" element={<Contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      
      <Footer/>
    </div>
  );
}

export default App;
