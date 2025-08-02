import signUpUser from "../modules/auth/signup";
import {ResponseObject }from "../../models/response.model";
import createResponse from "../modules/utils/create-response.utils";
import loginUserWithEmailIdPassword from "../modules/auth/login";
import { supabaseAuth,usersTable} from "../modules/supabase.config";
import { createAuthKeyRecord} from "../modules/auth/createAuthKeyRecord";
import {fetchAPIKey} from "../modules/auth/fetchUserAPIKey";
class ServerAuthController{
    supabaseAuth: typeof supabaseAuth;
    constructor() {this.supabaseAuth = supabaseAuth;}

    async ServerloginWithEmailIdPassword(email:string, password:string) : Promise<ResponseObject> {
        try {
            const requestLogin = await loginUserWithEmailIdPassword(this.supabaseAuth,email, password);
            const api_key = await fetchAPIKey(usersTable, email);
            if(api_key === null) {
                return createResponse(false, 404, "API key not found for the user", "No API key found");
            }
            else{
                return createResponse(true, 200, "User logged in successfully", { session: requestLogin.data.session.user, api_key });
            }
        }catch (error: any) {
            return createResponse(false, 422, "Error logging in user", error.message);
        }
    }

}

export default new ServerAuthController();