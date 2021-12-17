import { useMoralis } from "react-moralis";
import Avatar from "./Avatar"
import Timeago from "timeago-react"

function Message({ message }) {

    const { user } = useMoralis();

    const isUserMessage = message.get("ethAdress") === user.get("ethAdress");

    return (

        <div className={`flex items-end space-x-2 relative ${isUserMessage && "justify-end"}`}>
            <div className={`h-8 w-8 relative ${isUserMessage && "order-last ml-2"}`}>
                <Avatar  username={message.get("username")} />
            </div>

            <div className={`flex space-x-4 p-3 rounded-lg ${isUserMessage ? "rounded-br-none bg-pink-300" : "rounded-bl-none bg-blue-400"}`}>
                <p>{message.get("message")}</p>
            </div>
            
            <Timeago className={`text-[10px] text-gray-100 ${isUserMessage && "order-first pr-1"}`} datetime={message.createdAt} />

            <p className={`absolute -bottom-5 text-xs ${isUserMessage ? "text-pink-300" : "text-blue-400"}`}>
                {message.get("username")}
            </p>
        </div>
    )
}

export default Message