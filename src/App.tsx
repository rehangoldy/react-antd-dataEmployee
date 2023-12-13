import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Index from './pages';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/index' element={<Index/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
