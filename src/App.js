
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Detail from './Detail';

function App() {
  return (
   
   <div className=' flex flex-col items-center justify-center '>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/deatil/:id' element={<Detail/>} />

      </Routes>
   </div>   
    
  );
}

export default App;
