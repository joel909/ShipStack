export async function fetchAPIKey(table: any, email: string): Promise<string | null> {
    try {
        const { data, error } = await table.select('api_key').eq('email', email).single();
        console.log("Fetched API key for email:", email, "Data:", data);
        if (error) {
            console.error("Error fetching API key:", error);
            return null;
        }
        if (data) {
            console.log("API key found:", data.api_key);
            return data;
        }
        return null; // No API key found for the given email
    } catch (error) {
        console.error("Unexpected error fetching API key:", error);
        return null;
    }
    
}