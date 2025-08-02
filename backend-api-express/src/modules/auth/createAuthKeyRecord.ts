import { SupabaseClient } from "@supabase/supabase-js";
import {generateApiKey} from "../utils/create-api-keys-content";
import { updateUserUuid } from "./updateUserUuid";
export async function createAuthKeyRecord(table : any,uid: string, email: string) :Promise<boolean> {
    try{
        const {data,error} = await table.insert({
        UID: uid,
        email: email,
        api_key: generateApiKey(),
        created_at: new Date().toISOString()
    });
    if(error) {
        console.error("Error inserting auth key record:", error);
        if(error.code === '23505') {
            updateUserUuid(table, uid, email);
            return true; // Duplicate entry, return true to indicate the record already exists
        }
        return false;
    }
    console.log("Auth key record created successfully:");
    return true;
    }catch (error) {
        console.error("Error creating auth key record:", error);
        return false;
    }
    

   
}