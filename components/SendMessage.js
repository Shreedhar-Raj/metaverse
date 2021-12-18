import { useState } from "react";
import { useMoralis } from "react-moralis";

function SendMessage({ endOfMessageRef }) {

    const {user, Moralis} = useMoralis();
    const [ message, setMessage ] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();

        if (!message) return;

        const Messages = Moralis.Object.extend("Messages");
        const messages = new Messages();

        messages.save({
            message: message,
            username: user.getUsername(),
            ethAddress: user.get("ethAddress")
        }).then((message) => {

        },
        (error) => {
            console.log(error.message);
        }
        )

        endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });

        setMessage("")
    }

    return (
        <from onSubmit={async e => sendMessage}
        className="flex fixed bottom-10 bg-black opacity-80 px-6 py-4 max-w-2xl w-11/12 border-4 border-blue-400 rounded-full">
            <input type="text" value={message}
            onChange={e => setMessage(e.target.value)}
            className=" flex-grow outline-none bg-transparent text-white placeholder-gray-500 pr-5" placeholder={`Enter a message ${user.getUsername()}`} />
            <button onClick={sendMessage}
            className="font-bold text-pink-500">Send</button>
        </from>
    )
}

export default SendMessage
