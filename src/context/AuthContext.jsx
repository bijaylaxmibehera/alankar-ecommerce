import { createContext, useContext, useState } from "react";
import { loginService, signupService } from "../services/AuthService";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const foundUserDetails = JSON.parse(localStorage.getItem("loginDetails"));

  const [token, setToken] = useState(foundUserDetails?.token);
  const [currentUser, setCurrentUser] = useState(foundUserDetails?.user);
  const navigate = useNavigate();
  const location = useLocation();
  

  const loginHandler = async ({ email, password }) => {
    try {
      const response = await loginService(email, password);
      const {
        status,
        data: { foundUser, encodedToken },
      } = response;

      if (status === 200) {
        localStorage.setItem(
          "loginDetails",
          JSON.stringify({ user: foundUser, token: encodedToken })
        );
        setCurrentUser(foundUser);
        setToken(encodedToken);
        navigate(location?.state?.from?.pathname ?? "/");
      }
    } catch (error) {
      const {
        response: { status },
      } = error;
      if (status === 401) {
        toast.error("Invalid password! Please try again!");
      } else if (status === 404) {
        toast.error("Credentials not found! Please signup before logging in!");
      } else {
        console.error(error);
        toast.error("Unable to sign in!");
      }
    }
  };

  const signupHandler=async ({firstName,lastName,email,password,confirmPassword})=>{
    if(password!==confirmPassword){
        toast.error("Password fields are not matching!");
        navigate("/signup");
    }else{
        try{
            const response= await signupService(firstName,lastName,email,password);

            const {status, data:{encodedToken}}=response;

            if(status===201){
                localStorage.setItem("loginDetails", JSON.stringify({token:encodedToken}));
                setToken(encodedToken);
                toast.success("Successfully signedup! Kindly login to continue!");
                navigate("/login");
            }
        }catch(error){
            const {response: {status}}=error;
            if(status===422){
                toast.error("User email already exists! Please try signing up with another email!")
            }else{
                console.error(error);
                toast.error("Unable to sign up!");
            }
        }
    }
  }
 
  const logoutHandler=()=>{
    setToken(null);
    setCurrentUser(null);
    localStorage.removeItem("loginDetails");
    toast.success("Logged out successfully!");
    navigate(location?.state?.from?.pathname ?? "/");
  }
  return (
    <AuthContext.Provider value={{ loginHandler, currentUser, token,signupHandler,logoutHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth=()=>useContext(AuthContext);