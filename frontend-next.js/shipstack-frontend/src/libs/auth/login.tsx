export default async function LoginUserWithEmailIdPassword(email: string, password: string) {
    const NEXT_PUBLIC_API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try {
        if (!email || !password) {
            throw new Error("Email and password are required");
        }
        const res = await fetch(`${NEXT_PUBLIC_API_BASE_URL}/api/v1/auth/login/email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.data || 'Failed to log in');
        }

        return { success: true, data: data.data, message: data.message };

    }catch (error) {
        console.error("Login error:", error);
        throw new Error(`Login failed: ${error instanceof Error ? error.message : 'Unknown error'}`);

    }
}