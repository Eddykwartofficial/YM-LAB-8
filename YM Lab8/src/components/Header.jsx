import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import Container from './Container';

export default function Header() {
  const { state, dispatch } = useApp();
  const navigate = useNavigate();
  function logout() { dispatch({ type: 'LOGOUT' }); navigate('/'); }
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white p-4 shadow">
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="font-bold text-xl">STEM Lab GH</Link>
          <nav className="space-x-4">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
            <Link to="/programs" className="hover:underline">Programs</Link>
            <Link to="/projects" className="hover:underline">Projects & Awards</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/donate" className="hover:underline font-semibold">Donate</Link>
            {!state.user && <Link to="/login" className="hover:underline">Login</Link>}
            {!state.user && <Link to="/signup" className="hover:underline">Signup</Link>}
            {state.user && <button onClick={logout} className="ml-2 underline">Logout ({state.user.email})</button>}
          </nav>
        </div>
      </Container>
    </header>
  );
}
```
