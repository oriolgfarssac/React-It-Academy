import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [user, setUser] = useState<{ name: string; password: string }[]>([]);
  const [userState, setUserState] = useState(false);
  const [nom, setNom] = useState('');
  const [contrasenya, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserState = localStorage.getItem('myBooleanKey');
    if (storedUserState !== null) {
      const parsedUserState = JSON.parse(storedUserState);
      setUserState(parsedUserState);
      if (parsedUserState === true) {
        navigate('/mainPage');
        console.log(userState);
      }
    }

    const storedUserData = localStorage.getItem('Users');
    if (storedUserData) {
      setUser(JSON.parse(storedUserData));
    }
  }, [navigate]);

  const login = (event: React.FormEvent) => {
    event.preventDefault();
    const name = document.getElementById('loginName') as HTMLInputElement;
    const password = document.getElementById('loginPassword') as HTMLInputElement;
    setNom(name.value);
    setPassword(password.value);

    const loggedInUser = user.find(
      (person) => person.name === nom && person.password === password.value
    );

    if (loggedInUser) {
      const value: boolean = true;
      alert('Login Successful');
      setUserState(value);
      localStorage.setItem('myBooleanKey', JSON.stringify(value));
      navigate('/mainPage');
    } else {
      alert('Login Unsuccessful');
    }
  };

  const register = (event: React.FormEvent) => {
    event.preventDefault();
    const name = document.getElementById('registerName') as HTMLInputElement;
    const password = document.getElementById('registerPassword') as HTMLInputElement;
    setNom(name.value);
    setPassword(password.value);
    const newUser = {
      name: nom,
      password: contrasenya,
    };

    const updatedUsers = [...user, newUser];
    setUser(updatedUsers);

    localStorage.setItem('Users', JSON.stringify(updatedUsers));
  };

  return (
    <>
      <div className="mainReg">
        <div className="login">
          <h1>Login</h1>
          <form onSubmit={login}>
            <h3>Name</h3>
            <input type="text" className="inputName" id="loginName" />
            <h3>Password</h3>
            <input type="password" className="inputRegister" id="loginPassword" />
            <br />
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
        <div className="register">
          <h1>Register</h1>
          <form onSubmit={register}>
            <h3>Name</h3>
            <input type="text" className="inputName" id="registerName" />
            <h3>Password</h3>
            <input type="password" className="inputName" id="registerPassword" />
            <br />
            <br />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </>
  );
};
