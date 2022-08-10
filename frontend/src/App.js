import {BrowserRouter, Route, Link, Switch, Routes} from 'react-router-dom';
import Register from './components/Register';
import Login from './components/login';
import Dashboard from './components/dashboard';
import Protected from './components/protected';

function App()
{
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/back" element={<Register />} />
            <Route path="/dash" element={<Protected  cmp={Dashboard}/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;