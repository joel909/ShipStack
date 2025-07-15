import signUpUser from "../modules/auth/signup";
import {ResponseObject }from "../../models/response.model";
import createResponse from "../modules/utils/create-response.utils";
export class authController {
    
       
}

//STANDALONE FUNCTIONs

export async function signUpNewUser(email:string, password:string, name:string) : Promise<ResponseObject> {
    try{
        const requestUserCreation = await signUpUser(email, password, name)
        return createResponse(true, 200,"User created successfully", requestUserCreation.data);
    }catch (error :any) {
        return createResponse(false,422, "Error creating user", error.message);
    }
}