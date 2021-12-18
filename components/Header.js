import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline"

function Header() {

    const { user, logout } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 shadow-sm border-b-2 border-sky-700 bg-black">
            <div className="gird gird-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="flex max-w-[7%] rounded-lg p-1 bg-sky-500 rounded-lg overflow-hidden font-bold hover:bg-sky-400 col-span-4">
                <LoginIcon className="h-7 w-7 mr-1" />
                <button onClick={logout} className="">Logout</button>
                </div>

                <div className="text-left lg:text-center">
                    <div className=" h-48 w-48 relative mx-auto border-sky-600 border-8 rounded-full">
                        
                        <Avatar logOutOnPress />
                    </div>

                    <h1 className="text-3xl text-sky-500">Welcome to the PAPAFAM METAVERSE</h1>

                    <h2 className="text-5xl font-bold tuncate text-sky-500">{user.getUsername()}</h2>

                    <ChangeUsername className="" />
                </div>
            </div>

            
        </div>
    )
}

export default Header
