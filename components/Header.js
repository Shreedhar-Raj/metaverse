import Image from "next/image";
import { useMoralis } from "react-moralis"
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";

function Header() {

    const { user } = useMoralis();

    return (
        <div className="sticky top-0 p-5 z-50 shadow-sm border-b-2 border-pink-700 bg-black">
            <div className="gird gird-cols-5 lg:grid-cols-6 items-end lg:items-center">
                <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid col-span-4">
                    <Image className="rounded-full" layout="fill" src="https://links.papareact.com/3pi" />
                </div>

                <div className="text-left lg:text-center">
                    <div className=" h-48 w-48 relative mx-auto border-pink-500 border-8 rounded-full">
                        <Avatar logOutOnPress />
                    </div>

                    <h1 className="text-3xl text-pink-500">Welcome to the Dev Hub METAVERSE</h1>

                    <h2 className="text-5xl font-bold tuncate text-pink-500">{user.getUsername()}</h2>

                    <ChangeUsername className="" />
                </div>
            </div>
        </div>
    )
}

export default Header
