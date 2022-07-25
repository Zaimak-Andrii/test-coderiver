import Dashboard from './components/dashboard/dashboard';
import './app.scss';
import Header from './components/header/Header';
import UsersPage from './pages/users/usersPage';

function App() {
  return (
    <div className='app'>
      <Dashboard />
      <div className='body'>
        <Header />
        <UsersPage />
      </div>
    </div>
  );
}

export default App;
