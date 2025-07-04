import { supabaseAuth } from "../supabase.config";
export default async function signUpUser(email: string, password: string,name: string) {
    const {data,error} = await supabaseAuth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name: name
            }
        }
    })
    console.log("SignUp Data:", data);
    console.log("SignUp Error:", error);    
    if (error) {
        throw new Error(error.message);
    }
    return {success: true, data: data.user};
}