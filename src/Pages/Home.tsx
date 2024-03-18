import { Link } from "react-router-dom";
import '../Styles/loginstyle.css';
const Home = () => {
  return (
    <div className="homeMain">
  
  {/* Home page click on login to move login screen */}
   
   <h1 className="homeHeading">Welcome to PDF-Editing website</h1>
    <button className="buttonStyle">
             <Link style={{color:'#fff'}} to={'/admin/auth/login'}>
             Login
             </Link> </button>
             <button className="buttonStyle" >
              <Link style={{color:'#fff'}} to={'/admin/auth/login'}>SignUp</Link>
             </button>
      {/* <Outlet /> */}
   
    </div>
  );
};

export default Home;
