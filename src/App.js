import { Route,Routes } from 'react-router';
import './App.css';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Routes>

        <Route path='*' element={
          <>
            <Nav></Nav>
          </>
        }>
        </Route>

      </Routes>
      
    </div>
  );
}

export default App;
