import { Link } from "react-router-dom";
import '../Styles/loginstyle.css';
import Nav from "../components/Nav";
const Home = () => {
  return (
    <div>
  
  <Nav/>
  {/* Home page click on login to move login screen */}
   
   {/* <h1 className="homeHeading">Welcome to PDF-Editing website</h1> */}
    {/* <button className="buttonStyle">
             <Link style={{color:'#fff'}} to={'/admin/auth/login'}>
             Login
             </Link> </button>
             <button className="buttonStyle" >
              <Link style={{color:'#fff'}} to={'/admin/auth/login'}>SignUp</Link>
             </button> */}
      {/* <Outlet /> */}
   
    </div>
  );
};

export default Home;
