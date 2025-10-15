import useAuth from './hooks/useAuth';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';

function App() {
  const { user, login, logout } = useAuth();

  // If the user is not logged in, show the Login component 🚪
  if (!user) {
    return <Login onLogin={login} />;
  }

  // If the user is logged in, show the Dashboard component 🚀
  return <Dashboard user={user} onLogout={logout} />;
}

export default App;