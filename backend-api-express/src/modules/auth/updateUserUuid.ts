export async function updateUserUuid(table: any, newUid: string,email: string): Promise<boolean> {
    try{
        const {data,error} = await table.update({UID: newUid}).eq("email",email)
        if (error) {
            console.error("Error updating user UUID:", error);
            return false;
        }
        return true;
    }catch(e){
        console.error("Error updating user UUID:", e);
        return false;
    }
}