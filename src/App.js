import { Route,Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Produkty from './pages/Produkty';
import Kontakt from './pages/Kontakt';
import Wysyłka from './pages/Wysyłka';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='*' element={<Nav></Nav>}>

            <Route path='*' element={<Header></Header>}/>
            <Route path='produkty' element={<Produkty></Produkty>}/>
            <Route path='kontakt' element={<Kontakt></Kontakt>}/>
            <Route path='wysyłka' element={<Wysyłka></Wysyłka>}/>


        </Route>



        

      </Routes>
      
    </div>
  );
}

export default App;
