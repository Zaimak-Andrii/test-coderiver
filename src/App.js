import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/layout';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/notFound';
import UsersPage from './pages/users/usersPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='users' element={<UsersPage />} />
          <Route path='users/:id' element={<UsersPage />} />
          <Route path='*' element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
