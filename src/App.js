import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Client from './components/Client';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;