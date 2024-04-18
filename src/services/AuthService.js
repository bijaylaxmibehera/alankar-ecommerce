import axios from "axios";

export const loginService=async (email,password)=>await axios.post("/api/auth/login",{
    email:email,
    password:password,
});

export const signupService= async (firstname,lastname,email,password)=>await axios.post("/api/auth/signup", {
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
})