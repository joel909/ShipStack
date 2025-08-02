import signUpUser from "../modules/auth/signup";
import {ResponseObject }from "../../models/response.model";
import createResponse from "../modules/utils/create-response.utils";
import loginUserWithEmailIdPassword from "../modules/auth/login";
import { supabaseAuth,usersTable} from "../modules/supabase.config";
import { createAuthKeyRecord} from "../modules/auth/createAuthKeyRecord";
import { request } from "http";

class AuthController {
    supabaseAuth: typeof supabaseAuth;
    constructor() {this.supabaseAuth = supabaseAuth;}

    //Signup User Function
    async signUpNewUser(email:string, password:string, name:string) : Promise<ResponseObject> {
        try{
            //outer try catch to handle any errors during the signup process
            const requestUserCreation = await signUpUser(this.supabaseAuth,email, password, name)
            //inner try catch to handle any errors during the auth key record creation

            try{    
                const requestUserApiCreation = await createAuthKeyRecord(usersTable, requestUserCreation.data.id, email);
                if (!requestUserApiCreation) {
                    return createResponse(false, 500, "Failed to create auth key record", "Error creating auth key record");
                }
            }catch (error: any) {
                console.error("Error creating auth key record:", error);
                return createResponse(false, 500, "Error creating auth key record", error.message);
            }
            return createResponse(true, 200,"User created successfully", requestUserCreation.data);

        }catch (error :any) {
            return createResponse(false,422, "Error creating user likly failed sign up", error.message);
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
