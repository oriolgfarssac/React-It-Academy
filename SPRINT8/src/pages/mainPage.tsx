import '../App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Ships from '../components/ships';
import { useNavigate } from 'react-router-dom';

function mainPage() {
  const navigate = useNavigate();
  const logOut = () =>{
    localStorage.setItem('myBooleanKey', JSON.stringify(false));
    navigate('/userPage');
  }

  return (
    <>
    <header className='container-fluid'>
    <h1 className='col-12'>Star<br/>Wars</h1> <button onClick={logOut}>Log Out</button>
    </header>
    <Ships></Ships>
    </>
  )
}

export default mainPage;