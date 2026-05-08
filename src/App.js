import { Route,Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='*' element={
          <>
            <Nav></Nav>
            <Header></Header>
          </>
        }>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
