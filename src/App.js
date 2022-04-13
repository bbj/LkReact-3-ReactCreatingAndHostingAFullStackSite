import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesList from './pages/ArticlesList';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';
import {
  Routes, Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div id="page-body">
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/articles-list" element={<ArticlesList />} />
          <Route path="/article/:name" element={<ArticlePage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
//exact: as Route path / partially matches all paths!
