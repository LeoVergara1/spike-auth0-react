import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <div className="header-text">
        Example login with Auth0
      </div>
      <LoginButton />
      <div style={{marginBottom: '90px'}} />
      <Profile />
      <div style={{marginBottom: '90px'}} />
      <LogoutButton />
    </div>
  );
}

export default App;
