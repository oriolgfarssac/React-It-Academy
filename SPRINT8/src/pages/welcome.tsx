import { Link } from "react-router-dom";


export default () =>{

    return(
        <>
        <h1 className="titleWelcome"> Hi! And welcome to Star Wars Hangar! </h1>
        <br />
        <br />
        <button>
         <Link to="/userPage">Main Page</Link>
        </button>
        </>
    );

}