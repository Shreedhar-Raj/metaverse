import Image from "next/image"
import { useMoralis } from "react-moralis";

function Avatar({ username, logoutOnPress }) {

    const { user, logout } = useMoralis();

    logoutOnPress = true;

    return <Image className="rounded-full cursor-pointer bg-black opacity-100 hover:opacity-75" onClick={() => logoutOnPress && logout()}
    
    layout="fill" src={`https://avatars.dicebear.com/api/pixel-art/${username || user.get("username")}.svg`} />
}
export default Avatar
