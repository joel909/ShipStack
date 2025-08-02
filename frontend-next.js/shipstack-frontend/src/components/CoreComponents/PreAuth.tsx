import Loader from "../loader"
export default function PreAuth() {
        return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="mb-20"><Loader></Loader></div>
            <h1 className="text-2xl font-bold mt-10 text-gray-800">Been a while?</h1>
            <h1 className="text-2xl font-bold  text-gray-800">Try reloading!!</h1>
        </div>
    );
        
}