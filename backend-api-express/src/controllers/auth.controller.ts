import signUpUser from "../modules/auth/signup";
import {ResponseObject }from "../../models/response.model";
import createResponse from "../modules/utils/create-response.utils";
import loginUserWithEmailIdPassword from "../modules/auth/login";
import { supabaseAuth } from "../modules/supabase.config";

class AuthController {
    supabaseAuth: typeof supabaseAuth;
    constructor() {this.supabaseAuth = supabaseAuth;}

    //Signup User Function
    async signUpNewUser(email:string, password:string, name:string) : Promise<ResponseObject> {
        try{
            const requestUserCreation = await signUpUser(this.supabaseAuth,email, password, name)
            return createResponse(true, 200,"User created successfully", requestUserCreation.data);
        }catch (error :any) {
            return createResponse(false,422, "Error creating user", error.message);
        }
    }

    //To login user with email and password
    async loginWithEmailIdPassword(email:string, password:string) : Promise<ResponseObject> {
        try {
            const requestLogin = await loginUserWithEmailIdPassword(this.supabaseAuth,email, password);
            return createResponse(true, 200, "User logged in successfully", requestLogin.data);
        } catch (error: any) {
            return createResponse(false, 422, "Error logging in user", error.message);
        }
    }
       
}

export default new AuthController();
