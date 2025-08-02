export default async function loginUserWithEmailIdPassword(supabaseAuth:any,email: string, password: string) {
    const { data, error} = await supabaseAuth.signInWithPassword({
        email: email,
        password: password,
    })
    console.log("Login Data:", data);
    console.log("Login Error:", error);    
    if (error) {
        throw new Error(error.message);
    }

    return {success: true, data: data};
}