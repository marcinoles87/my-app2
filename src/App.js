import { BrowserRouter, Link, Route,Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';


import Produkty from './pages/Produkty';
import Kuchnia from './pages/Kuchnia'
import Jadalnia from './pages/Jadalnia'
import Łazienka from './pages/Łazienka'
import Kontakt from './pages/Kontakt';
import Wysyłka from './pages/Wysyłka';
import Koszyk from './pages/Koszyk';
import { useState } from 'react';
import Zamowienie from './pages/Zamowienie';
import Formularz from './pages/Formularz';

function App() {

  const [koszyk,setKoszyk] = useState([])
  const [allPrice,setallPrice] = useState('')



  

  return (
    <div className="App">

    <BrowserRouter>
      <Nav></Nav>
      <Koszyk koszyk={koszyk}></Koszyk>
      <Routes>


            <Route path='/' element={<Header koszyk={koszyk} setKoszyk={setKoszyk}></Header>}/>
            <Route path='produkty' element={<Produkty></Produkty>}/>
            <Route path='kuchnia' element={<Kuchnia></Kuchnia>}/>
            <Route path='jadalnia' element={<Jadalnia></Jadalnia>}/>
            <Route path='łazienka' element={<Łazienka></Łazienka>}/>
            <Route path='kontakt' element={<Kontakt></Kontakt>}/>
            <Route path='wysyłka' element={<Wysyłka></Wysyłka>}/>
            <Route path='zamowienie' element={<Zamowienie koszyk={koszyk} allPrice={allPrice} setallPrice={setallPrice}></Zamowienie>}/>
            <Route path='/formularz' element={<Formularz></Formularz>}/>


      </Routes>
      <Main></Main>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
