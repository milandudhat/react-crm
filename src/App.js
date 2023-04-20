import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter , Routes } from 'react-router-dom';
import Client from './pages/Client';
import Analytics from './pages/Analytics';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/analytics" element={<Analytics />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;