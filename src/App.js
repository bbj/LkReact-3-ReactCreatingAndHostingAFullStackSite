import './App.css';
import HomePage from './pages/HomePage';
import {
  Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </div>
  );
}

export default App;
//exact: as Route path / partially matches all paths!
