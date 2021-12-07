import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

import GoogleButton from './components/GoogleButton';

import './App.css';

function App() {
  const { user, setUser, loginUser } = useContext(AuthContext)

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    await loginUser(user)
  }

  return (
    <div >
      <div className="container mt-5">
        <form >
          <h2>Login View</h2>
          <br />
          <input
            name="email"
            value={user.email}
            onChange={handleChange}
            className="form-control"
            type="text"
            placeholder="email"
          />
          <br/>
          <input
            name="password"
            value={user.password}
            onChange={handleChange}
            className="form-control"
            type="password"
            placeholder="password"
          />
          <br/>
          <button
            onClick={handleSubmit}
            className="btn btn-outline-dark form-control"
          >
            Login
          </button>
          <br/>
          <GoogleButton className="googlebtn"/>
        </form>
      </div>
    </div>
  );
}

export default App;
