import React from 'react';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { Navigate, Route, Routes } from 'react-router';
import { NotFoundPage } from './pages/NotFoundPage';
import { ListPage } from './pages/ListPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
        </Route>
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="listBranch" element={<ListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
