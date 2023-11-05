import { Route,Routes } from 'react-router-dom';
import './App.css';
import Counter from './component/pages/counter'
import Navigation from './component/pages/navbar';
import Home from './component/pages/home';
import Forms from './component/pages/forms';
import ToDo from './component/pages/todo';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/forms' element={<Forms/>}></Route>
        <Route path='/todo' element={<ToDo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
