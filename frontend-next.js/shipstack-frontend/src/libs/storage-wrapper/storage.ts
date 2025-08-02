export default function StoreData(key: string, value: any) {
    if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
    } else {
                console.warn("LocalStorage is not available in this environment.");
        throw new Error("LocalStorage is not available in this environment.");
    }
}