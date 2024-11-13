import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import ListPage from './pages/ListPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="list" element={<ListPage />} />
        <Route path="*" element={<div>Main Page</div>} />
      </Route>
    </Routes>
  </Router>
);

export default App;
