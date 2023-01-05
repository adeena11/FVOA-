import Navbar from "../components/Navbar/navbar.jsx";
import Login from "../components/EmployeeLogin/EmployeeLogin.jsx";
import Footer from "../components/footer/footer.jsx";
const LoginScreen = () => {

    return (
        <div style={{minHeight: '100%'}}>
            <Navbar/>
            <Login/>
            <Footer/>
        </div>
      );
}
 
export default LoginScreen;