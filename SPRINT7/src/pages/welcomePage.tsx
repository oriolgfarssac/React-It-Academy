import { Link } from "react-router-dom";
import '../App.css'

function WelcomePage() {
  return (

    <div className="divWelcome">
    <h1> Hi! & Welcome to Quote! </h1>
    <h3> On this website, you'll be able to create one or more budgets with the services you need! </h3>
    <br />
    <Link to='/quotePage' className="boto1"> Make Budget </Link>

    </div>
  );
}

export default WelcomePage;