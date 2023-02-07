import axios from "axios";

class AuthController {
    async csrfCookie () {
        try {
            axios.defaults.withCredentials = true;
            axios.defaults.baseURL = "http://tasks-api.mr-dev.tech";
            let response = await axios.get("/sanctum/csrf-cookie");
            console.log(response);
            return true;
        } catch (error) {}
        return false;
    }
    async login(email,password) {
        try {
            let csrfRequest = await this.csrfCookie();
            if(csrfRequest){
                let response= await axios.post("/api/auth/login",{
                    email:email,
                    password:password
                });
                console.log(response)
                return true;
            }
        } catch (error) {
            console.log(error)
        }
        return false;
    }
    async register(email,password) {
        try {
            let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBezOha4WIvVQr8IW7YyuVRAPTCujEZLxY
            `,
            {
                email:email,
                password:password,
                returnSecureToken:true,	
            }
            );
            console.log(response.data);
            return{status:true, message:"Registered successfully", token:response.data.idToken};
        } catch (error) {
            console.log(error.response);
            return{status:false, message: "Registration failed, try agin"}
        }
    }
}
export default AuthController;