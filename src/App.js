import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CardsDetail from './components/CardsDetail';

function App() {
  return (
    <div >
      <Header/>

      <Routes>
        <Route path='/' element={<Cards/>}/>
        <Route path='/cart/:id' element={<CardsDetail/>}/>

      </Routes>
   
    </div>
  );
}

export default App;
